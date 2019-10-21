import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const rootReducer = createRootReducer();

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
