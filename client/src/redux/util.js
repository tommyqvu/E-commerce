export const updatedObject = (oldObj, updatedVals) => {
  return {
    ...oldObj,
    ...updatedVals,
  };
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemId) => {
  return cartItems.filter(item => item.id !== cartItemId);
};

export const decreaseQuantity = (cartItems, cartItemId) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemId);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemId)
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemId
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
