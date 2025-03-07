import { MdDelete } from "react-icons/md";

function TodoItem({ task, onDelete, onCheck }) {
  return (
    <div className="mx-auto my-2 max-w-xl rounded-lg border border-purple-200 bg-white p-3 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="task"
            className="h-5 w-5 cursor-pointer rounded-full border-2 border-purple-500 bg-transparent accent-purple-600 focus:ring-2 focus:ring-purple-300 focus:outline-none"
            onChange={() => onCheck(task.id)}
            checked={task.isChecked}
          />
          <p
            className={`font-medium transition-all ${
              task.isChecked ? "text-gray-400 line-through" : "text-gray-700"
            }`}
          >
            {task.title}
          </p>
        </div>

        <button
          onClick={() => onDelete(task.id)}
          className="group rounded p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
          aria-label="Delete task"
        >
          <MdDelete className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
