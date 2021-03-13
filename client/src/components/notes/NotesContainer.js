import React, { useState, useEffect } from "react";
import remark from "remark";
import remark2react from "remark-react";

import {
  ButtonSpan,
  Container,
  NoteHeader,
  StyledTextarea,
  NotePreviewBody,
} from "../../styles";

function EditContainer({ text, ...props }) {
  return <StyledTextarea defaultValue={text} {...props} />;
}

function ViewContainer({ text }) {
  return <NotePreviewBody>{text}</NotePreviewBody>;
}

function NotesContainer({ note, onDelete, handleEditNote }) {
  const { body } = note;
  /*   const initialState =
    window.localStorage.getItem(`note-${idx}`) ||
    '# Hello World\n\n```javascript\nconst text="Hello"\n```'; */
  const [text, setText] = useState();
  const [edit, setEdit] = useState(false);

  const createdAt = new Date(note.createdAt);
  let date = createdAt.getDate();
  let month = createdAt.getMonth() + 1;
  const yyyy = createdAt.getFullYear();

  let hours = createdAt.getHours();
  const minutes = createdAt.getMinutes();
  let seconds = createdAt.getSeconds();

  if (date < 10) {
    date = `0${date}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  hours = hours > 12 ? hours - 12 : hours < 10 ? "0" + hours : hours;

  const formattedDate = `${date}-${month}-${yyyy} ${hours}:${minutes}:${seconds} ${
    createdAt.getHours() > 12 ? "PM" : "AM"
  }`;

  const onToggle = () => {
    setEdit(!edit);
  };

  const onOkClicked = () => {
    setEdit(!edit);
    handleEditNote(note._id, text);
  };

  return (
    <>
      <Container>
        <NoteHeader>
          <span>{formattedDate}</span>
          <div>
            {edit ? (
              <ButtonSpan
                role="img"
                aria-label="preview"
                onClick={() => onOkClicked()}
              >
                👌
              </ButtonSpan>
            ) : (
              <ButtonSpan
                role="img"
                aria-label="edit"
                onClick={() => onToggle()}
              >
                ✍️
              </ButtonSpan>
            )}
            <ButtonSpan
              role="img"
              aria-label="delete"
              onClick={() => onDelete()}
            >
              🗑️
            </ButtonSpan>
          </div>
        </NoteHeader>
        {edit ? (
          <EditContainer
            text={text || body}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <ViewContainer
            text={
              remark()
                .use(remark2react)
                .processSync(text || body).result
            }
          />
        )}
      </Container>
    </>
  );
}

export default NotesContainer;
