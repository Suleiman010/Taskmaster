import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import PageNotFound from "./pages/PageNotFound";
import TaskManager from "./pages/TaskManager";
import Applayout from "./ui/Applayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate replace to="/taskmanager" />} />
          <Route path="todo" element={<Todo />} />
          <Route path="taskmanager" element={<TaskManager />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
