import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga.js"

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware];



export const store = createStore(rootReducer, applyMiddleware(...middlewares));

 
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default { store, persistor };
