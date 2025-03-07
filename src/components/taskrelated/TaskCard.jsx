import { MdDelete, MdEdit } from "react-icons/md";

function TaskCard({ task, onDelete, onEdit }) {
  console.log(task.title);
  return (
    <div>
      <div className="rounded bg-white p-4 transition-all ease-in-out hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-md font-medium">{task.title}</h5>
            <span className="text-xs text-slate-400">{task.date}</span>
          </div>
        </div>
        <p className="mt-2 flex-wrap text-sm text-slate-700">{task.content}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {task.categories.length > 0
              ? task.categories.map((cat) => (
                  <span key={cat.id}># {cat.name} </span>
                ))
              : ""}
          </div>
          <div className="flex">
            <MdEdit
              onClick={() => onEdit(task)}
              className="cursor-pointer text-[#968cc4] duration-200 hover:text-green-400"
            />
            <MdDelete
              onClick={() => onDelete(task.id)}
              className="ml-2 cursor-pointer text-[#968cc4] duration-200 hover:text-red-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
