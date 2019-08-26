import { createStore, applyMiddleware, compose } from 'redux';
import { default as ReduxThunk } from 'redux-thunk';
import rootReducer from './reducers/root';

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(ReduxThunk))
  );
};

export default configureStore;