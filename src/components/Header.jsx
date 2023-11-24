import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { openModal, openProjectModal } from "../reducers/modelSlice";
import { completeAllTasks } from "../reducers/tasksSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeAllTasks());
  };

  return (
    <div className="header">
      <div className="logo">
        <h1 className="text-big">TODO APP</h1>
      </div>
      <div className="buttons">
        <button onClick={() => handleComplete()}>Complete all Tasks</button>
        <button onClick={() => dispatch(openProjectModal())}>
          Add Project
        </button>
        <button onClick={() => dispatch(openModal())}>Add Task</button>
      </div>
    </div>
  );
};
