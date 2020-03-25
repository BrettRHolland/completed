import React, { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../context/TasksContext";

function Form() {
  const { addTask, clearAll, taskToEdit, editTask } = useContext(TasksContext);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setDescription(taskToEdit.description);
    } else {
      setDescription("");
    }
  }, [taskToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    if (taskToEdit) {
      editTask(description, taskToEdit.id);
    } else {
      addTask(description);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={e => {
          setDescription(e.target.value);
        }}
        placeholder="Add task"
        required
        type="text"
        value={description}
      />
      <button type="submit">{taskToEdit ? "Edit" : "Add"}</button>
      <button onClick={() => clearAll()}>Clear</button>
    </form>
  );
}

export default Form;
