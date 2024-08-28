import { useState } from "react";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
    });
  };

  return (
    <>
      <header className="w-full h-[250px] border-b-2 border-[#dcdcdc] flex items-center justify-center md:p-10 p-5">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[40%] sm:w-[60%] w-[80%] flex-col text-center"
        >
          <input
            type="text"
            name="task"
            value={taskData.task}
            placeholder="Enter your task"
            className="w-full md:text-[20px] text-[15px] font-semibold bg-[#f9f9f9] text-black text-center border-2 rounded-lg md:px-10 md:py-2 px-1 py-1 focus:outline-blue-400 placeholder:text-[#686868] mb-3 shadow-md"
            onChange={handleChange}
          />

          <div className="flex justify-between md:mt-5 mt-3">
            <select
              name="status"
              value={taskData.status}
              className="w-[30%] bg-[#f9f9f9] md:text-[15px] text-[12px] border-2 focus:outline-blue-400 rounded-lg md:px-5
           md:py-2 px-1 py-1 font-semibold shadow-md"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button
              type="submit"
              className="w-[40%] cursor-pointer bg-[#6457f9] border-none rounded-lg text-[#fff] md:text-[15px] text-[12px] font-semibold md:px-5 px-1 md:py-2 py-1 hover:bg-[#6457f9]/90 shadow-md hover:shadow-xl"
            >
              + Add Task
            </button>
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
