// Example from instructions pasted below

import { Provider } from "react-redux";
import store from "./store";
import { tasks } from "./reducers/tasksSlice";
import { TodoList } from "./components/TodoList";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { useSelector } from "react-redux";

export const App = () => {
  //const isOpen = useSelector((state) => state.model.isOpen);
  return (
    <div>
      {/* {isOpen && <AddTask />} */}
      <Header />
      <AddTask />
      <TodoList />
    </div>
  );
};
