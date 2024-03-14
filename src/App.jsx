import React, { useState } from "react";
import Header from "./components/Header";
import Joke from "./components/Joke";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import "./styles/styles.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // get id from Note component onClick by CB function.
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;     // !== (Strict Inequality) compares both val & dtype.
      });
    });
  }

  return (
    <div>
      <Header />
      <Joke />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;

