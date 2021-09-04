import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // for debugging
import { persistStore } from "redux-persist"; // allow browser to cache store

import rootReducer from "./root-reducer";

const middlewares = [logger]; // can be multiple

//const store = createStore(rootReducer, appleMiddleware(logger)); if middleware only take one, can be write like this
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
