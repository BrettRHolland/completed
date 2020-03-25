import React, { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import Task from "../Task";

function Tasks() {
  const { tasks } = useContext(TasksContext);
  return (
    <div>
      <h2>Tasks to be completed</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>No tasks to complete.</p>
      )}
    </div>
  );
}

export default Tasks;
