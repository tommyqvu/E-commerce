import { toggleCart } from '../actionTypes';
import { updatedObject } from '../util';
const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toggleCart:
      return updatedObject(state, { hidden: !state.hidden });
    default:
      return state;
  }
};

export default cartReducer