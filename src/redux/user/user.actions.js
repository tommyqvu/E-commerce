import { setCurUser } from '../actionTypes';
export const setCurrentUser = user => ({
  type: setCurUser,
  payload: user,
});
