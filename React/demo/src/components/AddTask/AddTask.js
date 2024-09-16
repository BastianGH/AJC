import "./AddTask.css";
import React from "react";
import { useState } from "react";

function AddTask({ tasks, setTasks }) {
  const [taskValue, setTaskValue] = useState("");
  const [completed, setCompleted] = useState("");

  const onChange = (e) => {
    setTaskValue(e.target.value);
  };

  const onReset = () => {
    setTaskValue("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(completed),
    };

    console.log(task);
    setTasks([...tasks, task]);
  };

  return (
    <section className="addtask">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Nom de la tâche"
          autoComplete="off"
          name="task"
          value={taskValue}
        ></input>
        <select
          onChange={(e) => {
            setCompleted(e.target.value);
          }}
          value={completed}
        >
          <option value="">En cours</option>
          <option value="true">Terminé</option>
        </select>
        <span className="reset" onClick={onReset}>
          Effacer
        </span>
        <button type="submit">Ajouter une tâche</button>
      </form>
      <p>{taskValue.length}</p>
    </section>
  );
}

export default AddTask;
