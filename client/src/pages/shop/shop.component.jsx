import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import { startCollectionFetchAction } from '../../redux/shop/shop.actions';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container'),
);
const CollectionContainer = lazy(() =>
  import('../collection/collection.container'),
);

const ShopPage = ({ match, startCollectionFetchActionAsync }) => {
  useEffect(() => {
    startCollectionFetchActionAsync();
  }, [startCollectionFetchActionAsync]);
  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startCollectionFetchActionAsync: () => dispatch(startCollectionFetchAction()),
});
export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
