import React from "react";
import { useState } from "react";

function AddTask({ tasks, setTasks, updating, setUpdating }) {
  const [taskValue, setTaskValue] = useState("");

  const onChange = (e) => {
    setTaskValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      date: new Date(),
    };

    console.log(tasks);
    if (updating.state) {
      const objToReplace = tasks.filter((task) => task.id === updating.id);
      const idToReplace = tasks.indexOf(objToReplace[0]);
      tasks.splice(idToReplace, 1, task);

      setUpdating({
        state: false,
      });
    } else {
      setTasks([...tasks, task]);
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={taskValue}
        />
        {updating.state ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">Add</button>
        )}
      </form>
    </section>
  );
}

export default AddTask;
