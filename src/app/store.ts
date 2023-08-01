import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {coordinatesReducer} from "../featurees/map/coordinatesSlice";

const usersPersistConfig = {
  key: 'map:coordinates',
  storage,
  whitelist: ['coordinates'],
};

const rootReducer = combineReducers({
  coordinates: persistReducer(usersPersistConfig, coordinatesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


