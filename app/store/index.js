// @flow
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import thunk from 'redux-thunk'

import reducers from './reducer';

const config = {
  key: 'root',
  blacklist: ['nav'],
  transforms: [
    createWhitelistFilter('session')
  ],
  storage,
};

const appReducer = persistCombineReducers(config, reducers);

let middleware = [thunk];
if (__DEV__ && process.env.NODE_ENV !== 'test') {
  middleware.push(createLogger());
}

export default function configureStore() {
  let store = createStore(appReducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);

  return { persistor, store };
}
