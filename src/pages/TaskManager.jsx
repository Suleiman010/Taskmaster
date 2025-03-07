import TaskCard from "../components/taskrelated/TaskCard";
import TaskAddEd from "../components/taskrelated/TaskAddEd";
import { useEffect, useState } from "react";
import SearchSortAdd from "../components/taskrelated/SearchSortAdd";

function TaskManager() {
  const [showPop, setShowPop] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    date: "",
    content: "",
    categories: [],
  });
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from localStorage only once when component mounts
  useEffect(() => {
    const loadTasks = () => {
      try {
        const savedTasksString = localStorage.getItem("tasks");

        // Check if there are actually tasks in localStorage
        if (savedTasksString) {
          const savedTasks = JSON.parse(savedTasksString);

          // Make sure savedTasks is an array before setting state
          if (Array.isArray(savedTasks)) {
            setTasks(savedTasks);
            //console.log("Loaded tasks:", savedTasks);
          } else {
            //console.error("Saved tasks is not an array:", savedTasks);
            setTasks([]);
          }
        } else {
          //console.log("No tasks found in localStorage");
          setTasks([]);
        }
      } catch (error) {
        //console.error("Error loading tasks from localStorage:", error);
        setTasks([]);
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
        localStorage.setItem("tasks", JSON.stringify(tasks));
        //console.log("Saved tasks to localStorage:", tasks);
      } catch (error) {
        //console.error("Error saving tasks to localStorage:", error);
      }
    }
  }, [tasks, isLoading]);

  function handleEditTask(task) {
    setEditingTask(task);
    setShowPop(true);
    setNewTask(task);
  }
  function handleDelete(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title); // Sort by title (A-Z)
    } else if (sortBy === "date") {
      return new Date(a.date) - new Date(b.date); // Sort by date (oldest to newest)
    }
    return 0;
  });

  return (
    <div className="mt-8">
      <SearchSortAdd
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showPop={showPop}
        setShowPop={setShowPop}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <section className="grid gap-4 px-5 md:grid-cols-3 md:px-8">
        {isLoading ? (
          <div className="col-span-3 flex items-center justify-center py-8 text-[#968cc4]">
            <svg className="mr-3 h-8 w-8 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Loading tasks...</span>
          </div>
        ) : sortedTasks.length > 0 ? (
          sortedTasks.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              onEdit={handleEditTask}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-3 py-8 text-center text-gray-500">
            No tasks found. Create a new task to get started!
          </div>
        )}
      </section>
      <TaskAddEd
        showPop={showPop}
        tasks={tasks}
        setShowPop={setShowPop}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}

export default TaskManager;
