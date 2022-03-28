import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { loadState } from "../localStorage/localStorage";
import reducers from "./reducers/index";

const storeFactory = () => {
  const middleware = [thunk];
  const store = createStore(reducers, loadState(), applyMiddleware(...middleware));

  return store;
};

export default storeFactory;
