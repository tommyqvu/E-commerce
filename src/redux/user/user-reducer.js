import { updatedObject } from '../util';
import {
  authSuccess,
  authFailed,
  signOutSuccess,
 
} from '../actionTypes';
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authSuccess:
      return updatedObject(state, { currentUser: action.payload, error: null });
    case authFailed:
      return updatedObject(state, { error: action.payload });
    case signOutSuccess:
      return updatedObject(state, { currentUser: null, error: null });
    default:
      return state;
  }
};
export default userReducer;
