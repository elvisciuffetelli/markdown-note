import axios from "axios";
import { GET_ERRORS, SET_USER_NOTES } from "./types";

export const setNotes = (notes) => {
  return {
    type: SET_USER_NOTES,
    payload: notes,
  };
};

// Register User
export const getUserNotes = (userId) => (dispatch) => {
  axios
    .get("/api/notes", {
      params: {
        userId
      }
    })
    .then((res) => {
      const { data } = res;
      // Set user notes
      dispatch(setNotes(data));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
