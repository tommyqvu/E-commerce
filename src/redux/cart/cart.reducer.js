import { toggleCart, addItem } from '../actionTypes';
import { updatedObject, addItemToCart } from '../util';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toggleCart:
      return updatedObject(state, { hidden: !state.hidden });
    case addItem:
      return updatedObject(state, {
        cartItems: addItemToCart(state.cartItems, action.payload),
      });
    default:
      return state;
  }
};

export default cartReducer;
