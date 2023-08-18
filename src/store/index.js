import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducers";
import { logger } from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Middleware
const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

//PersistConfig
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["positions", "filter"],
  // blacklist: [],
};
//PersistReducer

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export { store };
export const persistor = persistStore(store);
