import { useSelector } from "react-redux";

import { TaskCard } from "./TaskCard";

export const TodoList = () => {
  const taskList = useSelector((state) => state.tasks.tasksList);

  if (taskList) {
    console.log(taskList);
  }

  return (
    <main>
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
    </main>
  );
};
