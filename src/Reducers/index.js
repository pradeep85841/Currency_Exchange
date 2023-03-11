import * as reducers from "./Reducers.js";
import { combineReducers } from "redux";

const Reducer = combineReducers({
  TABLE: reducers.TableReducer,
});
export default Reducer;
