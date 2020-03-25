import React from "react";
import Tasks from "../Tasks";
import TasksContextProvider from "../../context/TasksContext";
import Form from "../Form";

function App() {
  return (
    <TasksContextProvider>
      <div>
        <Form />
        <Tasks />
      </div>
    </TasksContextProvider>
  );
}

export default App;
