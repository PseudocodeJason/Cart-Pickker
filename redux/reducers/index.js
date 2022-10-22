import { combineReducers } from "redux";
import cart from "./cart";
import api from "./api"
export default combineReducers({cart, api});