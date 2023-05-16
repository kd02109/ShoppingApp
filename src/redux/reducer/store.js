import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);
// store의  persisted 버젼을 선언해준다.
//  이제 이 persistor와 store를 사용하여 application을 감싸고 있는 provider를 새롭게 만들어줄 것이다.

export default { store, persistor };
