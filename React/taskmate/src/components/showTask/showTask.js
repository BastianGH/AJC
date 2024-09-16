import React from "react";

function showTask({ tasks, setTasks, setUpdating }) {
  function onDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function onUpdate(id) {
    setUpdating({
      id,
      state: true,
    });
  }

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasks.length}</span>
        </span>
        <span className="clearAll">Clear all</span>
      </p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.date | "YYYY-MM-DD HH-mm-ss"}</span>
            </p>
            <i
              onClick={() => onUpdate(task.id)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={() => onDelete(task.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default showTask;
