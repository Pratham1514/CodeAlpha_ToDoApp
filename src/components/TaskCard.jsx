import Delete from "../assets/delete.png";

const TaskCard = ({ title, handleDelete, ind }) => {
  return (
    <article className="w-full min-h-[100px] p-3 my-3 border-2 border-[#dcdcdc] rounded-xl shadow-md hover:shadow-lg">
      <p className="md:text-[18px] text-[15px] font-medium">{title}</p>
      <div
        className="relative left-[80%] rounded-full cursor-pointer mt-3"
        onClick={() => handleDelete(ind)}
      >
        <img src={Delete} alt={Delete} className="w-[30px] transition-all ease-in-out duration-1000 hover:scale-125" />
      </div>
    </article>
  );
};

export default TaskCard;
