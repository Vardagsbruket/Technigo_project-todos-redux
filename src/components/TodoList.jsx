import { useSelector } from "react-redux";
import { TaskCard } from "./TaskCard";
import "./TodoList.css";

export const TodoList = () => {
  const taskList = useSelector((state) => state.tasks.tasksList);


  if (taskList) {
    console.log(taskList);
  }
  const incompleteTasks = taskList.reduce((acc, curr) => {
    if (!curr.isDone) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <main>
      <section>
<p>Number of tasks: {taskList.length}</p>
<p>Incomplet tasks: {incompleteTasks}</p>
      </section>
      <section className="todoList">
        {taskList?.map((task) => (
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
