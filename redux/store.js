import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { default as ReduxThunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { logger } from 'redux-logger';
import rootReducer from './reducers/root';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'groceryList'
  ],
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  return createStore(
    persistedReducer,
    compose(applyMiddleware(ReduxThunk, logger))
  );
};

const store = configureStore();

let persistor = persistStore(store);

export {
  store,
  persistor,
};