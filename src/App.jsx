// Example from instructions pasted below

import { useSelector } from "react-redux";
import { TodoList } from "./components/TodoList";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";

export const App = () => {
  const isOpen = useSelector((state) => state.model.isOpen);
  return (
    <div>
      {isOpen && <AddTask />}
      <Header />
      {/* <AddTask /> */}
      <TodoList />
    </div>
  );
};
