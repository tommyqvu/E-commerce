import React from 'react';

import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';
const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle> {title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default Collection;
