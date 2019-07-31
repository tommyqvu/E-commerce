import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.container';
import { startCollectionFetchAction } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.startCollectionFetchActionAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startCollectionFetchActionAsync: () => dispatch(startCollectionFetchAction()),
});
export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
