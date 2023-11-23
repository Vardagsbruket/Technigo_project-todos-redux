// Example from instructions pasted below

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasksList: [
    {
      createdDate: 1700729781605,
      name: "Watch video on actions & reducers",
      comment: "Do it properly",
      deadline: "",
      category: "house",
      isDone: true,
    },
    {
      createdDate: 1700729871043,
      name: "Follow redux code along",
      comment: "Do it properly",
      deadline: "",
      category: "garden",
      isDone: false,
    },
    {
      createdDate: 17007298713893,
      name: "Fork weekly assignment",
      comment: "Do it properly",
      deadline: "",
      category: "bill",
      isDone: true,
    },
    {
      createdDate: 1700869871043,
      name: "Create a todo app",
      comment: "Do it properly",
      deadline: "",
      category: "shop",
      isDone: false,
    },
  ],
  menuActive: false,
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
      //console.log(task);
    },
  },
});

export const { addTask, removeTask, handleIsDone } = tasks.actions;
