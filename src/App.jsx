// Example from instructions pasted below

import { Provider } from "react-redux";
import store from "./store";
import { tasks } from "./reducers/tasksSlice";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};
