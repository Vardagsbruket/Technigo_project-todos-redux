import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Category } from "./Category";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasksSlice";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const [comment, setComment] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const selectCategory = (value) => {
    setCategory(value);
    console.log("category selected");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        createdDate: new Date().getTime(),
        name: task,
        comment: comment,
        deadline: deadline.getTime(),
        category: category,
        isDone: false,
      })
    );
  };
  const handleClick = () => {
    dispatch(closeModal());
  }

  return (
    <>
    <button onClick={handleClick}>X</button>
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <label htmlFor="comment">Comment:</label>
      <input
        type="text"
        id="comment"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <label htmlFor="deadline">Deadline:</label>
      <DatePicker
        selected={deadline}
        onChange={(date) => setDeadline(date)}
        showTimeSelect
        dateFormat="Pp"
      />

      <Category value={category} setSelectedCategory={selectCategory} />

      <button type="submit">Save</button>
    </form>
    </>
    
  );
};
