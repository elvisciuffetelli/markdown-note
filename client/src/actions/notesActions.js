import axios from "axios";
import { GET_ERRORS, SET_USER_NOTES } from "./types";

export const setNotes = (notes) => {
  return {
    type: SET_USER_NOTES,
    payload: notes,
  };
};

// get user notes
export const getUserNotes = (userId) => (dispatch) => {
  axios
    .get("/api/notes", {
      params: {
        userId,
      },
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

// post a note
export const postNote = (params) => (dispatch) => {
  return axios.post("/api/notes", params).catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  );
};

// deleteNote a note
export const deleteNote = (noteId) => (dispatch) => {
  return axios.delete(`/api/notes/${noteId}`).catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  );
};

// edit a note
export const editNote = (noteId, params) => (dispatch) => {
  return axios.put(`/api/notes/${noteId}`, params).catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  );
};
