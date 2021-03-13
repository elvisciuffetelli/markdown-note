import React, { useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import NotesContainer from "../notes/NotesContainer";
import { connect } from "react-redux";
import {
  getUserNotes,
  postNote,
  deleteNote,
  editNote,
} from "../../actions/notesActions";

import { GlobalStyle, ButtonSpan } from "../../styles";

const Notes = ({
  auth,
  notes,
  getUserNotes,
  errors,
  postNote,
  deleteNote,
  editNote,
}) => {
  const themeState = useTheme();

  const addNote = () => {
    const { user } = auth;
    const params = {
      user_id: user.id,
      body: "# Hello World",
    };
    postNote(params).then((res) => {
      getUserNotes(user.id);
    });
  };

  const onDelete = (noteId) => {
    const { user } = auth;
    deleteNote(noteId).then((res) => {
      getUserNotes(user.id);
    });
  };

  const handleEditNote = (noteId, text) => {
    const { user } = auth;
    const params = {
      user_id: user.id,
      body: text,
    };

    editNote(noteId, params).then((res) => {
      getUserNotes(user.id);
    });
  };

  useEffect(() => {
    if (auth && auth.user) {
      const { user } = auth;
      getUserNotes(user.id);
    }
  }, [auth, getUserNotes]);

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>
          React Markdown Note{" "}
          {themeState.dark ? (
            <ButtonSpan role="img" aria-label="sun" onClick={themeState.toggle}>
              🌞
            </ButtonSpan>
          ) : (
            <ButtonSpan
              role="img"
              aria-label="moon"
              onClick={themeState.toggle}
            >
              🌙
            </ButtonSpan>
          )}
        </h1>
      </div>
      <button onClick={() => addNote()} type="button">
        Add New Note
      </button>
      <br />
      <br />
      {notes.length &&
        notes.map((note, idx) => {
          debugger;
          return (
            <NotesContainer
              key={note._id}
              note={note}
              onDelete={() => onDelete(note._id)}
              handleEditNote={handleEditNote}
            />
          );
        })}
    </>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  errors: state.errors,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  getUserNotes,
  postNote,
  deleteNote,
  editNote,
})(Notes);
