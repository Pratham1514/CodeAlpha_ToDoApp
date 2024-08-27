import TaskCol from "./components/TaskCol";
import TaskForm from "./components/TaskForm";
import Todo from "./assets/direct-hit.png";
import Doin from "./assets/glowing-star.png";
import Done from "./assets/check-mark.png";
import { useEffect, useState } from "react";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log('task', tasks)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="grid grid-rows font-sans">
        <TaskForm setTasks={setTasks} />

        <main className="flex lg:flex-row flex-col lg:items-start items-center justify-evenly p-5">
          <TaskCol
            icon={Todo}
            title="To do"
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
          />
          <TaskCol
            icon={Doin}
            title="Doing"
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
          />
          <TaskCol
            icon={Done}
            title="Done"
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </>
  );
}

export default App;
