// store.js
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import rootReducer from "./Reducer";
import {
  expireMiddleware,
  checkExpirationAtStart,
} from "./Middlewares/middlewares";

// Define qué estado deseas persistir
const persistConfig = {
  key: "myStateKey",
  storage,
  whitelist: ["adminLogin"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk, expireMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store, null, () => {
  checkExpirationAtStart(store);
});
