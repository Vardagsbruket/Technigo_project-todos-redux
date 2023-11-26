// Example from instructions pasted below

import { createSlice } from "@reduxjs/toolkit";

const getTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem("tasksList");
  const emptyList = [];
  if (storedTasks) {
    return JSON.parse(storedTasks);
  } else {
    return emptyList;
  }
};

const initialState = {
  tasksList: getTasksFromLocalStorage(),
};

export const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksList.push(action.payload);
    },
    removeTask: (state, { payload }) => {
      const filteredList = state.tasksList.filter(
        (task) => task.createdDate !== payload
      );
      state.tasksList = filteredList;
    },
    handleIsDone: (state, { payload }) => {
      const task = state.tasksList.find((task) => task.createdDate === payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    completeAllTasks: (state) => {
      state.tasksList.map((task) => {
        task.isDone = true;
      });
    },
    updateLocalStorage: (state) => {
      const localStore = JSON.stringify(state.tasksList);
      localStorage.setItem("tasksList", localStore);
    },
  },
});

export const {
  addTask,
  removeTask,
  handleIsDone,
  completeAllTasks,
  updateLocalStorage,
} = tasks.actions;
