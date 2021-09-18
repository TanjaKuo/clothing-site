import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // for debugging
import { persistStore } from "redux-persist"; // allow browser to cache store
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk]; // can be multiple

// there are three types "development" || "production" || "test" in NODE_ENV
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//const store = createStore(rootReducer, appleMiddleware(logger)); if middleware only take one, can be write like this
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
