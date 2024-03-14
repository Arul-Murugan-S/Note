import React from "react";
import "../styles/styles.css";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Note;

// here CB function written within the onClick property/attribute.
