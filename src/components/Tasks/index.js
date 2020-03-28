import React, { useContext } from "react";
import styled from "styled-components";

import { TasksContext } from "../../context/TasksContext";
import Task from "../Task";

function Tasks() {
  const { clearAll, tasks } = useContext(TasksContext);
  return (
    <Container>
      {tasks.length > 0 ? (
        <>
          <ul>
            {tasks.map(task => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
          {tasks.length > 1 ? (
            <Clear onClick={() => clearAll()}>Remove all tasks</Clear>
          ) : null}
        </>
      ) : (
        <Empty>Congratulations, all tasks have been completed.</Empty>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

const Empty = styled.p`
  align-items: center;
  background-color: #43458b;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  color: white;
  display: grid;
  font-family: "Gotham Bold", Helvetica, sans-serif;
  font-size: 1.25rem;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto auto;
  margin-bottom: 0.375rem;
  min-height: 4rem;
  padding: calc(1rem + 3px) 1rem 1rem 1rem;
  text-align: center;
`;

const Clear = styled.button`
  background-color: black;
  border: 0;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: white;
  cursor: pointer;
  font-family: "Gotham Medium", Helvetica, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.025rem;
  margin: 1rem auto;
  min-height: 2rem;
  outline: 0;
  padding: calc(0.5rem + 1px) 0.5rem 0.5rem 0.5rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default Tasks;
