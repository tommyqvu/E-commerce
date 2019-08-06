import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  googleSignInStart,
  emailSignInStart,
  checkUserSession,
  signOutStart,
  signUpStart,
  signUpSuccess,
} from '../actionTypes';

import {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser,
} from '../../firebase/firebase.utils';

import {
  authFailedAction,
  authSuccessAction,
  signOutSuccessAction,
  signUpSuccessAction,
} from '../user/user.actions';

export function* getSnapshotUserRef(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfile, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(
      authSuccessAction({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (e) {
    yield put(authFailedAction(e));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotUserRef(user);
  } catch (e) {
    yield put(authFailedAction(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(googleSignInStart, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotUserRef(user);
  } catch (e) {
    yield put(authFailedAction(e));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(emailSignInStart, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotUserRef(userAuth);
  } catch (e) {
    yield put(authFailedAction(e));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* signOut() {
  try {
    auth.signOut();
    yield put(signOutSuccessAction());
  } catch (e) {
    yield put(authFailedAction(e));
  }
}

export function* onSignOutStart() {
  yield takeLatest(signOutStart, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccessAction({ user, additionalData: { displayName } }));
  } catch (e) {
    yield put(authFailedAction(e));
  }
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotUserRef(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
