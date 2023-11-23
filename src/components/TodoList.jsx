import { useSelector } from "react-redux";
import { TaskCard } from "./TaskCard";
import { IconFilter } from "../assets/icons2";
import "./TodoList.css";
import { useEffect, useState } from "react";

export const TodoList = () => {
  const [filteredTasks, setFilteredTasks] = useState(null);
  const [filterSelected, setFilterSelected] = useState("all");
  const taskList = useSelector((state) => state.tasks.tasksList);
  let incompleteTasks = 0;

  if (taskList) {
    incompleteTasks = taskList.reduce((acc, curr) => {
      if (!curr.isDone) {
        acc++;
      }
      return acc;
    }, 0);
  }

  useEffect(() => {
    switch (filterSelected) {
      case "all":
        setFilteredTasks(taskList);
        break;
      case "completed":
        setFilteredTasks(taskList.filter((task) => task.isDone === true));

        break;
      case "uncompleted":
        setFilteredTasks(taskList.filter((task) => task.isDone !== true));
        break;
      case "House":
        setFilteredTasks(taskList.filter((task) => task.category === "House"));
        break;
      case "Garden":
        setFilteredTasks(taskList.filter((task) => task.category === "Garden"));
        break;
      case "Bill":
        setFilteredTasks(taskList.filter((task) => task.category === "Bill"));
        break;
      case "Shop":
        setFilteredTasks(taskList.filter((task) => task.category === "Shop"));
        break;
      case "Other":
        setFilteredTasks(taskList.filter((task) => task.category === "Other"));
        break;
    }
  }, [filterSelected, filteredTasks]);

  return (
    <main>
      <section className="taskCount">
        <p>Number of tasks: {taskList.length}</p>
        <p>Incomplete tasks: {incompleteTasks}</p>
      </section>
      <section className="taskFilter">
        <form>
          <label htmlFor="category-select"></label>
          <select
            onChange={(e) => setFilterSelected(e.target.value)}
            value={filterSelected}
            name="category-select"
            id="category-select"
          >
            <option value="all">Show all tasks</option>
            <option value="completed">Show completed tasks</option>
            <option value="uncompleted">Show uncompleted tasks</option>
            <option value="Other">Category: Other</option>
            <option value="House">Category: House chores</option>
            <option value="Garden">Category: Garden</option>
            <option value="Bill">Category: Economy</option>
            <option value="Shop">Category: Shopping</option>
          </select>
          <IconFilter />
        </form>
      </section>
      <section className="todoList">
        {filteredTasks?.map((task) => (
          <TaskCard
            createdDate={task.createdDate}
            name={task.name}
            comment={task.comment}
            category={task.category}
            isDone={task.isDone}
            deadline={task.deadline}
            key={task.createdDate}
          />
        ))}
      </section>
    </main>
  );
};
