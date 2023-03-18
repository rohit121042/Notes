import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [createNote, setCreateNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setCreateNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div className="container">
      <form
        className="create-note"
        onSubmit={(e) => {
          props.onAdd(createNote);
          setCreateNote({ title: "", content: "" });
          e.preventDefault();
        }}
      >
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={createNote.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={createNote.content}
          onChange={handleChange}
          onClick={() => setExpanded(true)}
        />
        <Zoom in={isExpanded}>
          <Fab color="success" type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
