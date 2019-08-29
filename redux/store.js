import { createStore, applyMiddleware, compose } from 'redux';
import { default as ReduxThunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers/root';

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(ReduxThunk, logger))
  );
};

export default configureStore;