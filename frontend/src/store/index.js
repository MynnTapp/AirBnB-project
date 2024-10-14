//import configureStore from "./store";

import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";

const rootReducer = combineReducers({
  session: sessionReducer,
  // other reducers can be added here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
