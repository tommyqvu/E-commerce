import {
  startCollectionFetch,
  successCollectionFetch,
  failedCollectionFetch,
} from '../actionTypes';

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

export const startCollectionFetchAction = () => ({
  type: startCollectionFetch,
});

export const successCollectionFetchAction = collectionMap => ({
  type: successCollectionFetch,
  payload: collectionMap,
});

export const failedCollectionFetchAction = errorMessage => ({
  type: failedCollectionFetch,
  payload: errorMessage,
});

export const startCollectionFetchActionAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(startCollectionFetchAction());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(successCollectionFetchAction(collectionsMap));
      })
      .catch(err => {
        console.log(err);
        dispatch(failedCollectionFetchAction(err.message));
      });
  };
};
