// import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';
// import CollectionOverview from './collection-overview.component';
// import Spinner from '../spinner/spinner.component';

// const GET_COLLECTIONS = gql`
//   {
//     collections {
//       id
//       title
//       items {
//         id
//         name
//         price
//         imageUrl
//       }
//     }
//   }
// `;

// const CollectionOverviewContainer = () => (
//   <Query query={GET_COLLECTIONS}>
//     {({ loading, error, data }) => {
//       if (loading) return <Spinner />;
//       return <CollectionOverview collections={data.collections} />;
//     }}
//   </Query>
// );

// export default CollectionOverviewContainer;

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../../hoc/with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);

export default CollectionOverviewContainer;
