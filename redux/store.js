import { createStore, applyMiddleware } from 'redux';
import { default as ReduxThunk } from 'redux-thunk';
import rootReducer from './reducers/root';

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
  );
};

export default configureStore;