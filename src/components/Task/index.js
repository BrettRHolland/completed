import React, { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../../context/TasksContext";

function Task({ task }) {
  const { findTask, removeTask } = useContext(TasksContext);

  return (
    <ListItem>
      <Description>{task.description}</Description>

      <Icon
        onClick={() => findTask(task.id)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"
        />
      </Icon>

      <Icon
        onClick={() => removeTask(task.id)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
        />
      </Icon>
    </ListItem>
  );
}

const ListItem = styled.li`
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto auto;
  margin-bottom: 0.375rem;
  min-height: 3.375rem;
  padding: 1rem;
`;

const Description = styled.p`
  padding-top: 3px;
`;

const Icon = styled.svg`
  cursor: pointer;
  fill: #6b7c93;

  :hover {
    fill: #43458b;
  }
`;

export default Task;
