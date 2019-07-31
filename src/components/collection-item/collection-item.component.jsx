import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import Button from '../button/button.component';
import { addItemToCart } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        className='custom-button'
        inverted
        onClick={() => addItemToCart(item)}
      >
        {' '}
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
});
export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);
