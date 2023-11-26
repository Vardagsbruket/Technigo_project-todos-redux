// Example from instructions pasted below

import { useSelector } from "react-redux";
import { TodoList } from "./components/Task/TodoList";
import { AddTask } from "./components/Task/AddTask";
import { Header } from "./components/Header";
import { ProjectList } from "./components/Project/ProjectList";
import { AddProject } from "./components/Project/AddProject";

export const App = () => {
  const isOpen = useSelector((state) => state.model.isOpen);
  const isProjectOpen = useSelector((state) => state.model.isProjectOpen);
  return (
    <div>
      {isOpen && <AddTask />}
      {isProjectOpen && <AddProject />}
      <Header />
      <TodoList />
      <ProjectList />
    </div>
  );
};
