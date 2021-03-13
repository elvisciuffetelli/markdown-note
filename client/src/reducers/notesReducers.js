import { SET_USER_NOTES } from "../actions/types";

const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NOTES:
      return action.payload;
    default:
      return state;
  }
};

export default noteReducer;