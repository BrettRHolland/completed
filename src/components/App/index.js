import React from "react";
import styled from "styled-components";
import Tasks from "../Tasks";
import TasksContextProvider from "../../context/TasksContext";
import Form from "../Form";

function App() {
  return (
    <TasksContextProvider>
      <Container>
        <Form />
        <Tasks />
      </Container>
    </TasksContextProvider>
  );
}
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  padding: 0 1rem;
`;
export default App;
