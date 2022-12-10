import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { MainReducer } from "./MainReducer";

export const store = createStore(MainReducer, composeWithDevTools());
