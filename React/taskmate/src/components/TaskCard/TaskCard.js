import React from "react";

function TaskCard() {
  return (
    <li key={task.id}>
      <p>
        <span className="name">{task.name}</span>
        <span className="time"></span>
      </p>
      <i className="bi bi-pencil-square"></i>
      <i className="bi bi-trash"></i>
    </li>
  );
}

export default TaskCard;
