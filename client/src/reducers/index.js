import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducers,
  errors: errorReducer,
});
