import { MdAdd } from "react-icons/md";
import { generateId } from "../../utility/util";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";

function TaskAddEd({
  showPop,
  setShowPop,
  tasks,
  setTasks,
  newTask,
  setNewTask,
  currentCategory,
  setCurrentCategory,
  editingTask,
  setEditingTask,
}) {
  const [errors, setErrors] = useState({
    title: false,
    date: false,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  }
  function handleAddCategory() {
    if (currentCategory.trim() === "") return; // Prevent empty categories
    const newCat = {
      id: generateId(),
      name: currentCategory.trim(),
    };
    setNewTask((prevTask) => ({
      ...prevTask,
      categories: [...prevTask.categories, newCat], // Add new category
    }));
    setCurrentCategory("");
  }
  function handleAdd(e) {
    e.preventDefault();
    if (!newTask.title || !newTask.date) {
      alert("Title and Date are required!");
      return;
    }
    if (editingTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? newTask : task,
      );

      setTasks(updatedTasks);
    } else {
      const updatedTasks = {
        ...newTask,
        id: generateId(), // Generate a unique ID
      };

      setTasks([...tasks, updatedTasks]);
    }

    setNewTask({
      id: "",
      title: "",
      date: "",
      content: "",
      categories: [],
    });
    setCurrentCategory("");
    setShowPop(false);
  }

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [fieldName]: true }));
    } else {
      setErrors((prev) => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const isTitleEmpty = !newTask.title.trim();
    const isDateEmpty = !newTask.date.trim();

    setErrors({
      title: isTitleEmpty,
      date: isDateEmpty,
    });

    // If any field is empty, stop submission
    if (isTitleEmpty || isDateEmpty) {
      return;
    }

    // If all fields are valid, submit the form
    handleAdd(e);
  };
  // Remove a category by ID
  function handleRemoveCategory(id) {
    setNewTask((prevTask) => ({
      ...prevTask,
      categories: prevTask.categories.filter((cat) => cat.id !== id), // Remove category by ID
    }));
  }
  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-300 ease-in-out ${
        showPop
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className={`mx-4 w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl transition-all duration-300 ease-in-out ${
          showPop
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        <div className="mb-6 border-b border-stone-200 pb-4">
          <h1 className="text-center text-2xl font-bold text-[#5e5488]">
            {editingTask ? "Edit Task" : "Create New Task"}
          </h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* The rest of your form code remains unchanged */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#5e5488] uppercase">
              title <span className="text-red-400">*</span>
            </label>

            <input
              name="title"
              value={newTask.title}
              type="text"
              className={`w-full rounded-lg border-2 border-[#968cc4]/30 p-3 text-[#5e5488] transition-all focus:border-[#968cc4] focus:ring-2 focus:ring-[#968cc4]/30 ${errors.title ? "border-red-500" : ""}`}
              placeholder="task title"
              onChange={handleInputChange}
              onBlur={(e) => validateField("title", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#5e5488] uppercase">
              date <span className="text-red-400">*</span>
            </label>
            <input
              value={newTask.date}
              name="date"
              className={`w-full rounded-lg border-2 border-[#968cc4]/30 p-3 text-[#5e5488] transition-all focus:border-[#968cc4] focus:ring-2 focus:ring-[#968cc4]/30 ${errors.title ? "border-red-500" : ""}`}
              type="date"
              placeholder="task title"
              onChange={handleInputChange}
              onBlur={(e) => validateField("title", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#5e5488] uppercase">
              task details
            </label>
            <textarea
              value={newTask.content}
              name="content"
              placeholder="content"
              rows="2"
              className="w-full rounded-lg border-2 border-[#968cc4]/30 p-3 text-[#5e5488] transition-all focus:border-[#968cc4] focus:ring-2 focus:ring-[#968cc4]/30"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-[#5e5488] uppercase">
              categories
            </label>
            <div className="flex items-center justify-start gap-5">
              <input
                value={currentCategory}
                name="categories"
                type="text"
                placeholder="add cat"
                className="w-full rounded-lg border-2 border-[#968cc4]/30 p-2.5 text-[#5e5488] transition-all focus:border-[#968cc4] focus:ring-2 focus:ring-[#968cc4]/30 sm:flex-1"
                onChange={(e) => setCurrentCategory(e.target.value)}
              />
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#968cc4] px-5 py-2.5 text-white transition-all hover:bg-[#7a6faa] focus:ring-2 focus:ring-[#968cc4] focus:ring-offset-2 focus:outline-none"
                onClick={handleAddCategory}
                disabled={!currentCategory.trim()}
              >
                <MdAdd className="text-lg" />
              </button>
            </div>

            <div className="my-2 flex-wrap text-sm">
              {newTask.categories.map((cat) => (
                <span
                  className="inline-flex items-center rounded-full bg-[#968cc4]/10 px-3 py-1 text-sm text-[#5e5488]"
                  key={cat.id}
                >
                  #{cat.name}
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(cat.id)}
                    className="ml-1.5 transition-colors hover:text-red-500"
                  >
                    <TiDelete className="h-5 w-5" />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
            <button
              type="reset"
              onClick={() => {
                setNewTask({
                  title: "",
                  date: "",
                  content: "",
                  categories: [],
                });
                setCurrentCategory("");
                setShowPop(false);
                setEditingTask(null);
                setErrors({ title: false, date: false });
              }}
              className="cursor-pointer rounded-lg border-2 border-red-400 px-6 py-2.5 text-red-500 transition-all hover:bg-red-400 hover:text-white focus:ring-2 focus:ring-red-200 focus:outline-none"
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`cursor-pointer rounded-lg px-6 py-2.5 text-white transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                editingTask
                  ? "bg-blue-500 hover:bg-blue-600 focus:ring-blue-200"
                  : "bg-green-500 hover:bg-green-600 focus:ring-green-200"
              }`}
            >
              {editingTask ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskAddEd;
