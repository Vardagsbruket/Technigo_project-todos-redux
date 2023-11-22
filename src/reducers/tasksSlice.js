// Example from instructions pasted below

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasksList: [
    {
      createdDate: 1123123,
      name: "Watch video on actions & reducers",
      comment: "Do it properly",
      deadline: "",
      category: "house",
      isDone: true,
    },
    {
      createdDate: 1123179,
      name: "Follow redux code along",
      comment: "Do it properly",
      deadline: "",
      category: "garden",
      isDone: false,
    },
    {
      createdDate: 1124890,
      name: "Fork weekly assignment",
      comment: "Do it properly",
      deadline: "",
      category: "bill",
      isDone: true,
    },
    {
      createdDate: 1549123,
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
