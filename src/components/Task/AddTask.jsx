import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Category } from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../reducers/tasksSlice";
import { closeModal } from "../../reducers/modelSlice";
import { addProjectTask, projects } from "../../reducers/projectSlice";
import "./AddTask.css";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const [comment, setComment] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState("Other");
  const addProjTask = useSelector((state) => state.projects.addProjectTasks);

  const dispatch = useDispatch();

  const selectCategory = (value) => {
    setCategory(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (addProjTask) {
      dispatch(
        addProjectTask({
          createdDate: new Date().getTime(),
          name: task,
          comment: comment,
          deadline: deadline.getTime(),
          category: category,
          isDone: false,
        })
      );
      dispatch(closeModal());
    } else {
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
      dispatch(closeModal());
    }
  };
  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <div className="addTaskContainer">
      <div className="addTask">
        <div className="addTaskHeader">
          <h3>Add task</h3>
          <span onClick={handleClick}>Close</span>
        </div>
        <div className="addTaskForm">
          <form onSubmit={handleSubmit}>
            <div className="taskName">
              <label htmlFor="task">Task:</label>
              <input
                type="text"
                id="task"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
            <div className="comment">
              <label htmlFor="comment">Comment:</label>
              <input
                type="text"
                id="comment"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="deadline">
              <label htmlFor="deadline">Deadline:</label>
              <DatePicker
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div className="category">
              <Category value={category} setSelectedCategory={selectCategory} />
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};
