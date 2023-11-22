// Example from instructions pasted below

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasksList: [
    {
      createdDate: 1123123,
      name: "Watch video on actions & reducers",
      comment: "Do it properly",
      deadline: "",
      category: "Fun",
      isDone: true,
    },
    {
      createdDate: 1123179,
      name: "Follow redux code along",
      comment: "Do it properly",
      deadline: "",
      category: "Fun",
      isDone: false,
    },
    {
      createdDate: 1124890,
      name: "Fork weekly assignment",
      comment: "Do it properly",
      deadline: "",
      category: "Fun",
      isDone: true,
    },
    {
      createdDate: 1549123,
      name: "Create a todo app",
      comment: "Do it properly",
      deadline: "",
      category: "Fun",
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
      console.log("task in reducer",action.payload);
      state.tasksList.push(action.payload);
    },
  },
});

export const {addTask} = tasks.actions;