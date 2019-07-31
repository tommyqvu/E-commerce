import {
  toggleCart,
  addItem,
  removeItem,
  decrease,
  clearCart,
} from '../actionTypes';
import {
  updatedObject,
  addItemToCart,
  removeItemFromCart,
  decreaseQuantity,
} from '../util';
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
    case removeItem:
      return updatedObject(state, {
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      });
    case decrease:
      return updatedObject(state, {
        cartItems: decreaseQuantity(state.cartItems, action.payload),
      });
    case clearCart:
      return updatedObject(state, { cartItems: [] });
    default:
      return state;
  }
};

export default cartReducer;
