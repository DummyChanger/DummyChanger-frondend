import CounterReducer from "./CounterReducer";
import isSlevee from "./isSlevee";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: CounterReducer,
  sleveeType: isSlevee,
});

export default allReducers;
