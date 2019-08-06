import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
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
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseQuantity(id)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>{' '}
    </div>
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
