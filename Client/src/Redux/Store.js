import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import rootReducer from "./Reducer";

// Define qué estado deseas persistir
const persistConfig = {
  key: "myStateKey",
  storage, // o storageLocal
  whitelist: ["adminLogin"], // nombre del estado que deseas persistir
  expire: {
    // Establecer la expiración en 24 horas (86400 segundos)
    seconds: 3600,
  },
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
