import { combineReducers } from "redux";
import { operationsReducer } from "./contactListApp/reducers/Operations";

export const MainReducer = combineReducers({
  operationsReducer,
});
