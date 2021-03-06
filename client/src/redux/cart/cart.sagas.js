import { takeLatest, put, all, call } from 'redux-saga/effects';

import { clearCart } from '../actionTypes';


export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(clearCart, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
