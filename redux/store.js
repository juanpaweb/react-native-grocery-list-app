import { createStore } from 'redux';
import rootReducer from './reducers/root';

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState
  );
};

export default configureStore;