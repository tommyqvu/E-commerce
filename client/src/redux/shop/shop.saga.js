import { takeEvery, call, put, all } from 'redux-saga/effects';

import { startCollectionFetch } from '../actionTypes';

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  failedCollectionFetchAction,
  successCollectionFetchAction,
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot,
    );
    yield put(successCollectionFetchAction(collectionsMap));
  } catch (e) {
    yield put(failedCollectionFetchAction);
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(startCollectionFetch, fetchCollectionsAsync);
}

export function* shopSagas(){
  yield all([call(fetchCollectionsStart)])
}