import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasksSlice";
import modelReducer from "./reducers/modelSlice";

const reducer = combineReducers({
  tasks: tasks.reducer,
  model: modelReducer,
});

const store = configureStore({ reducer });

export default store;
