import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <>
      <h1>Todo`s</h1>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/:id" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
