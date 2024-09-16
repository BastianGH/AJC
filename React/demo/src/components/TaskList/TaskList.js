import { useState } from "react";
import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";
import BoxCard from "../BoxCard/BoxCard";

export default function TaskList({ tasks, setTasks }) {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 5271,
  //     name: "Nettoyer le garage",
  //     completed: true,
  //   },
  //   {
  //     id: 7825,
  //     name: "Apprendre le russe",
  //     completed: false,
  //   },
  //   {
  //     id: 8391,
  //     name: "Divorcer",
  //     completed: false,
  //   },
  // ]);

  const [show, setShow] = useState(true);

  function onDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <h1>Liste des tâches</h1>
      <button className="trigger" onClick={() => setShow(!show)}>
        {show ? "Masquer" : "Afficher"}
      </button>
      {show && (
        <ul>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={onDelete} />
          ))}
        </ul>
      )}
      <BoxCard result="success">
        <p className="title">Notification de réussite</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
          tempor metus. Donec sagittis sit amet nisl eget sagittis. Praesent et
          est pellentesque, ultrices odio eu, mollis dui. Nam aliquam metus vel
          ex eleifend condimentum.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Informations importantes</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
          tempor metus. Donec sagittis sit amet nisl eget sagittis. Praesent et
          est pellentesque, ultrices odio eu, mollis dui. Nam aliquam metus vel
          ex eleifend condimentum.
        </p>
      </BoxCard>
    </section>
  );
}
