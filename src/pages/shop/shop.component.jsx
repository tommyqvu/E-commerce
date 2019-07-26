import React from 'react';
import { Route } from 'react-router-dom';

import Collection from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
