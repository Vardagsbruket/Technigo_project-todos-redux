import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasksSlice";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export default store;
