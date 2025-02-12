import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistConfig={
    key: "CONTACTS",
    storage,
    blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
                                    reducer: persistedReducer,
                                    middleware: (getDefaultMiddleware) =>
                                        getDefaultMiddleware({
                                          serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],},
                                        }),
                                    });

export let persistor = persistStore(store);