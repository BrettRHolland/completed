import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TasksContext = createContext();

function TasksContextProvider(props) {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = description => {
    setTasks([...tasks, { description, id: uuidv4() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearAll = () => {
    setTasks([]);
  };

  const findTask = id => {
    const selectedTask = tasks.find(task => task.id === id);

    setTaskToEdit(selectedTask);
  };

  const editTask = (description, id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { description, id } : task
    );

    setTasks(updatedTasks);

    setTaskToEdit(null);
  };

  return (
    <TasksContext.Provider
      value={{
        addTask,
        clearAll,
        editTask,
        findTask,
        removeTask,
        tasks,
        taskToEdit
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
