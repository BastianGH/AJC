import "./App.css";
import { useState } from "react";

import Header from "./template/header/Header";

import AddTask from "./components/AddTask/AddTask";
import ShowTask from "./components/showTask/showTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [updating, setUpdating] = useState({});

  console.log(tasks);
  return (
    <div className="App">
      <Header />
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        updating={updating}
        setUpdating={setUpdating}
      />
      <ShowTask
        tasks={tasks}
        setTasks={setTasks}
        updating={updating}
        setUpdating={setUpdating}
      />
    </div>
  );
}

export default App;
