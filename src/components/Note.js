import React from "react";
import { BsTrashFill } from "react-icons/bs";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <BsTrashFill />
      </button>
    </div>
  );
}

export default Note;
