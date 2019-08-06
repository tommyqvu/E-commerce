import {
  emailSignInStart,
  googleSignInStart,
  authFailed,
  authSuccess,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signUpStart,
  signUpSuccess,
} from '../actionTypes';

export const googleSignInStartAction = () => ({
  type: googleSignInStart,
});
export const emailSignInStartAction = credentials => ({
  type: emailSignInStart,
  payload: credentials,
});

export const authFailedAction = err => ({
  type: authFailed,
  payload: err,
});
export const authSuccessAction = user => ({
  type: authSuccess,
  payload: user,
});

export const checkUserSessionAction = () => ({
  type: checkUserSession,
});

export const signOutStartAction = () => ({
  type: signOutStart,
});
export const signOutSuccessAction = () => ({
  type: signOutSuccess,
});

export const signUpStartAction = credentials => ({
  type: signUpStart,
  payload: credentials,
});
export const signUpSuccessAction = ({ user, additionalData }) => ({
  type: signUpSuccess,
  payload: { user, additionalData },
});
