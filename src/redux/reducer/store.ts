import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk, { ThunkMiddleware } from "redux-thunk";

const middlewaresApply = applyMiddleware(logger, thunk as ThunkMiddleware);

const store = legacy_createStore(rootReducer, middlewaresApply);

const persistor = persistStore(store);
// store의  persisted 버젼을 선언해준다.
//  이제 이 persistor와 store를 사용하여 application을 감싸고 있는 provider를 새롭게 만들어줄 것이다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
