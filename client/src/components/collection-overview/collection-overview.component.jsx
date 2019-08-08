import React from 'react';
import PreviewCollection from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </div>
);

export default CollectionOverview;
