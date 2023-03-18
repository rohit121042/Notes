import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Note(props) {
  const [isReadMore, setReadMore] = useState(false);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>
        {isReadMore ? props.content : props.content.slice(0, 160)}
        {props.content.length >= 160 && !isReadMore && "..."}
        <br />
        {props.content.length >= 160 && (
          <span
            style={{
              textAlign: "center",
              display: "block"
            }}
            onClick={() => {
              setReadMore(!isReadMore);
            }}
          >
            <MoreHorizIcon color="primary" />
          </span>
        )}
      </p>
      <button onClick={() => props.onDelete(props.id)}>
        <DeleteIcon color="warning" />
      </button>
    </div>
  );
}

export default Note;
