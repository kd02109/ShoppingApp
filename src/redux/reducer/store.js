import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

//export const persistor = persistStore(store);

export default store;
