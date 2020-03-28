import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { TasksContext } from "../../context/TasksContext";

function Form() {
  const { addTask, taskToEdit, editTask } = useContext(TasksContext);
  const [description, setDescription] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setDescription(taskToEdit.description);
    } else {
      setDescription("");
    }
  }, [taskToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    setHasError(false);
    if (description.length === 0) {
      setHasError(true);
    } else if (taskToEdit) {
      editTask(description, taskToEdit.id);
    } else {
      addTask(description);
      setDescription("");
    }
  };

  return (
    <>
      <TaskForm onSubmit={handleSubmit}>
        <Input
          error={hasError}
          onChange={e => {
            setDescription(e.target.value);
          }}
          placeholder="What do you need to do today?"
          type="text"
          value={description}
        />
        <Submit type="submit">{taskToEdit ? "Edit task" : "Add task"}</Submit>
        <Error>{hasError ? "Please enter a task." : null}</Error>
      </TaskForm>
    </>
  );
}
const TaskForm = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr auto;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  -webkit-transition: box-shadow 150ms ease;
  background-color: white;
  border: 0;
  border-radius: 4px;
  border: ${props =>
    props.error ? "1px solid #fa755a" : "1px solid transparent"};
  box-shadow: 0 1px 3px 0 #e6ebf1;
  color: #32325d;
  font-family: "Gotham Book", Helvetica, sans-serif;
  font-size: 1rem;
  min-height: 3.375rem;
  outline: 0;
  padding: calc(1rem + 3px) 1rem 1rem 1rem;
  transition: box-shadow 150ms ease;

  :focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  ::placeholder {
    color: rgba(107, 124, 147, 0.6);
  }
`;

const Error = styled.p`
  color: #fa755a;
  height: 1rem;
  padding-left: 1rem;
`;

const Submit = styled.button`
  background-color: #32325d;
  border: 0;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: white;
  cursor: pointer;
  font-family: "Gotham Bold", Helvetica, sans-serif;
  font-size: 1rem;
  letter-spacing: 0.025rem;
  min-height: 3.375rem;
  outline: 0;
  padding: calc(1rem + 1px) 1rem 1rem 1rem;

  :hover {
    background-color: #43458b;
  }
`;

export default Form;
