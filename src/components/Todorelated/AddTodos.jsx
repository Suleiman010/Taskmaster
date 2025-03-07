import { MdAdd } from "react-icons/md";

function AddTodos({ onSubmit, setTodoName, todoName }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-6 flex max-w-2xl items-center gap-2 rounded-lg bg-white p-2 shadow-sm transition-shadow duration-200 focus-within:shadow-md"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        name="title"
        className="flex-1 rounded-md border-0 bg-transparent p-3 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        aria-label="Task title"
      />

      <button
        type="submit"
        className="rounded-full bg-purple-500 p-3 text-white shadow-sm transition-all duration-200 hover:bg-purple-600 focus:ring-2 focus:ring-purple-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!todoName.trim()}
        aria-label="Add task"
      >
        <MdAdd className="h-5 w-5" />
      </button>
    </form>
  );
}
export default AddTodos;
