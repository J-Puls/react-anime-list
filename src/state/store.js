import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import promise from "redux-promise-middleware";

// Needed to include redux dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  allReducers,
  composeEnhancer(applyMiddleware(promise))
);


