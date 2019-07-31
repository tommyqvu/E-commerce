import {
  toggleCart,
  addItem,
  removeItem,
  decrease,
  clearCart,
} from '../actionTypes';

export const toggleCartHidden = () => ({
  type: toggleCart,
});

export const addItemToCart = item => ({
  type: addItem,
  payload: item,
});
export const removeItemFromCart = id => ({
  type: removeItem,
  payload: id,
});

export const decreaseQuantity = id => ({
  type: decrease,
  payload: id,
});

export const clearCartAction = () => ({
  type: clearCart,
});
