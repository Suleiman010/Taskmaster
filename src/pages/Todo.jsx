import { useEffect, useState } from "react";
import { generateId } from "../utility/util";
import TodoItem from "../components/Todorelated/TodoItem";
import AddTodos from "../components/Todorelated/addTodos";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadTasks = () => {
      try {
        const savedTodosString = localStorage.getItem("todos");

        // Check if there are actually tasks in localStorage
        if (savedTodosString) {
          const savedTasks = JSON.parse(savedTodosString);

          // Make sure savedTasks is an array before setting state
          if (Array.isArray(savedTasks)) {
            setTodos(savedTasks);
            //console.log("Loaded tasks:", savedTasks);
          } else {
            console.error("Saved tasks is not an array:", savedTasks);
            setTodos([]);
          }
        } else {
          //console.log("No tasks found in localStorage");
          setTodos([]);
        }
      } catch (error) {
        //console.error("Error loading tasks from localStorage:", error);
        setTodos([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Small timeout to ensure DOM is ready (helps with some rendering issues)
    setTimeout(loadTasks, 0);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    // Only save when tasks have changed and we're not in loading state
    if (!isLoading) {
      try {
        localStorage.setItem("todos", JSON.stringify(todos));
        //console.log("Saved tasks to localStorage:", todos);
      } catch (error) {
        //console.error("Error saving tasks to localStorage:", todos);
      }
    }
  }, [todos, isLoading]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!todoName || todoName === "") return;
    const newTodo = {
      title: todoName,
      id: generateId(),
      isChecked: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setTodoName("");
  }
  function handleDelete(id) {
    setTodos((todo) => todos.filter((todo) => todo.id !== id));
  }
  function handleChecked(id) {
    const updatedTasks = todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
    );
    setTodos(updatedTasks);
  }

  return (
    <div>
      <div className="mt-10 px-2 md:px-5">
        <h1 className="relative text-center">
          <span className="relative inline-block pb-2 text-xl font-bold text-[#968cc4] uppercase md:text-2xl">
            To Do List
            <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 transform rounded-full bg-[#C5BAFF]"></span>
          </span>
        </h1>
        <AddTodos
          onSubmit={handleSubmit}
          todoName={todoName}
          setTodoName={setTodoName}
        />
        <Todos tasks={todos} onDelete={handleDelete} onCheck={handleChecked} />
      </div>
    </div>
  );
}

function Todos({ tasks, onDelete, onCheck }) {
  if (tasks.length === 0)
    return (
      <div className="text-md mt-5 text-center text-[#968cc4] uppercase md:text-xl">
        Start adding tasks
      </div>
    );
  return (
    <div className="mt-5">
      {tasks.map((task) => (
        <TodoItem
          task={task}
          key={task.id}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      ))}
    </div>
  );
}

export default Todo;
