import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
// const middelwares = [];
const middelwares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middelwares));
export const persistor = persistStore(store);
