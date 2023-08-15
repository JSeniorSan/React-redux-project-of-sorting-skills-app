import { combineReducers } from "redux";
import { positionReducer } from "./positiions/positions-reducer";
export const rootReducer = combineReducers({
  positions: positionReducer,
});
