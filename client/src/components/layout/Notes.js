import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../../ThemeContext";
import NotesContainer from "../notes/NotesContainer";
import { connect } from "react-redux";
import { getUserNotes } from "../../actions/notesActions";

import { GlobalStyle, ButtonSpan } from "../../styles";

const Notes = ({auth, notes, getUserNotes, errors}) => {
  const themeState = useTheme();
  const initialState = JSON.parse(window.localStorage.getItem("notes")) || [
    {
      createdOn: new Date(),
      edit: true,
    },
  ];
  //const [notes, setNotes] = useState(initialState);

  /* useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]); */

  const addNote = () => {
    const tempNotes = [...notes];
    const result = { createdOn: new Date(), edit: true };
    tempNotes.push(result);
    //setNotes(tempNotes);
  };

  const onDelete = (idx) => {
    const tempNotes = [...notes];
    tempNotes.splice(idx, 1);
    //setNotes(tempNotes);
  };

  const createNotesContainer = () => {
    return notes.length && notes.map((note, idx) => (
      <NotesContainer
        key={note.createdOn}
        note={note}
        idx={idx}
        onDelete={() => onDelete(idx)}
      />
    ));
  };

  useEffect(() => {
    if (auth && auth.user) {
      const { user } = auth;
      getUserNotes(user.id)
    }

  },[auth, getUserNotes])

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
      {createNotesContainer()}
    </>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  errors: state.errors,
  auth: state.auth
});
export default connect(mapStateToProps, { getUserNotes })(Notes);

