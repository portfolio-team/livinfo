import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import * as infoStore from './livinfo';

const reducer = combineReducers({
  [infoStore.featureKey]: infoStore.reducer,
});

const middleware = getDefaultMiddleware({
  thunk: true,
  immutableCheck: true,
  serializableCheck: true,
});

export const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

// export type AppState = ReturnType<typeof reducer>;
// export type AppDispatch = typeof store.dispatch;
