import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleClick(createNote) {
    if (createNote.title !== "" || createNote.content !== "") {
      setNotes((prevNotes) => {
        return [...prevNotes, createNote];
      });
    }
  }

  function handleDelete(id) {
    setNotes(
      notes.filter((note, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleClick} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title.slice(0, 60)}
            content={note.content}
            onDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
