import TaskCard from "./TaskCard";

const TaskCol = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <>
      <section className="lg:w-[33.33%] w-[60%] md:m-5 m-3 text-center">
        <h2 className="flex items-center justify-center font-semibold md:text-[20px] text-[16px]">
          <img src={icon} alt={icon} className="w-[50px] h-[50px]" />
          {title}
        </h2>

        {tasks.map(
          (task, i) =>
            task.status === status && (
              <TaskCard
                key={i}
                title={task.task}
                handleDelete={handleDelete}
                ind={i}
              />
            )
        )}
      </section>
    </>
  );
};

export default TaskCol;
