import CounterReducer from "./CounterReducer";
import LoggedReducer from "./IsLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducer,
});

export default allReducers;
