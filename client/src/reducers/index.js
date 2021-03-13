import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducer from "./errorReducers";
import noteReducer from "./notesReducers";

export default combineReducers({
  auth: authReducers,
  errors: errorReducer,
  notes: noteReducer
});
