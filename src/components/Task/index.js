import React, { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

function Task({ task }) {
  const { findTask, removeTask } = useContext(TasksContext);

  return (
    <li>
      {task.description}/<span onClick={() => removeTask(task.id)}>delete</span>
      /<span onClick={() => findTask(task.id)}>edit</span>
    </li>
  );
}

export default Task;
