import { updatedObject } from '../util';
import {setCurUser} from "../actionTypes"
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case setCurUser:
      return updatedObject(state, { currentUser: action.payload });

    default:
      return state;
  }
};
export default userReducer;
