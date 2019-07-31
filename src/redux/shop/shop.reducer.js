import {
  startCollectionFetch,
  successCollectionFetch,
  failedCollectionFetch,
} from '../actionTypes';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case startCollectionFetch:
      return {
        ...state,
        isFetching: true,
      };
    case successCollectionFetch:
      return { ...state, isFetching: false, collections: action.payload };
    case failedCollectionFetch:
      return {
        ...state,
        collections: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
