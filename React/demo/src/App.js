import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import SimpleExamples from "./components/SimpleExamples";
// import Counter from "./components/Counter";
// import CounterFC from "./components/CounterFC";
import TaskList from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}
