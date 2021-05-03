import { combineReducers } from "redux";
import todos from "./todos";

//TODO maybe we dont need this file at all (this 1 line can be moved to somewhere else)
export default combineReducers({ todos });
