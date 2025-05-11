
import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/userSlices";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
// Persist configuration
const persistConfig = {
  key: "root",
  storage,

};

const persistedReducer = persistReducer(persistConfig, userSlices);

export const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);