import React from 'react';
import { connect } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

import {
  removeItemFromCart,
  decreaseQuantity,
  addItemToCart,
} from '../../redux/cart/cart.action';

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer className='name'>{name}</TextContainer>
      <QuantityContainer className='quantity'>
        <div className='arrow' onClick={() => decreaseQuantity(id)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseQuantity(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <span className='price'>{price}</span>
      <RemoveButtonContainer onClick={() => removeItemFromCart(id)}>
        &#10005;
      </RemoveButtonContainer>{' '}
    </CheckoutItemContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: id => dispatch(removeItemFromCart(id)),
  decreaseQuantity: id => dispatch(decreaseQuantity(id)),
  increaseQuantity: item => dispatch(addItemToCart(item)),
});
export default connect(
  null,
  mapDispatchToProps,
)(CheckoutItem);
