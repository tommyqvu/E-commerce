// import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';
// import Spinner from '../../components/spinner/spinner.component';
// import Collection from './collection.component';

// const GET_COLLECTION_BY_TITLE = gql`
//   query getCollectionsByTitle($title: String!) {
//     getCollectionsByTitle(title: $title) {
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
// const CollectionContainer = ({ match }) => (
//   <Query
//     query={GET_COLLECTION_BY_TITLE}
//     variables={{ title: match.params.collectionId }}
//   >
//     {({ loading, data: { getCollectionsByTitle } }) => {
//       if (loading) return <Spinner />;
//       return <Collection collection={getCollectionsByTitle} />;
//     }}
//   </Query>
// );

// export default CollectionContainer;
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../hoc/with-spinner/with-spinner.component';
import Collection from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(Collection);

export default CollectionContainer;
