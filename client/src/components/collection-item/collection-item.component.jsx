import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionFooterContainer,
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

import { addItemToCart } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} className='image' />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        className='custom-button'
        inverted
        onClick={() => addItemToCart(item)}
      >
        {' '}
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
});
export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);
