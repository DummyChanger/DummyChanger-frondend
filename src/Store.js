import { createStore } from "redux";
import Reducer from "./Reducers/index";

const store = createStore(
  Reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
