import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tasks = (props) => {
  const [Tas, setTas] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    allTasks();
  }, []);

  const allTasks = async () => {
    try {
      const res = await fetch(`http://localhost:5000/tasks`);
      const data = await res.json();
      console.log(data);
      setTas(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newTaskText.trim() !== "") {
      const newTask = {
        id: Tas.length + 1,
        text: newTaskText,
      };
      setTas([...Tas, newTask]);
      setNewTaskText("");
    }
  };
  const deleteTask = (taskId) => {
    const updatedTasks = Tas.filter((task) => task.id !== taskId);
    setTas(updatedTasks);
  };
  return (
    <>
      {Tas.length === 0 ? (
        <h2>No tasks available. Add a new task below:</h2>
      ) : (
        Tas.map((item, indx) => {
          return (
            <div
              key={indx}
              style={{
                border: "1px solid #000",
                margin: "20px",
                padding: "20px",
                cursor: "pointer", // Add cursor style to indicate clickable
              }}
              onClick={() => deleteTask(item.id)} // Use item.id here
            >
              <Link>
                <h2>{item.text}</h2>
              </Link>
            </div>
          );
        })
      )}
      <div>
        <h2>Add a new todo:</h2>
        <input
          type="text"
          value={newTaskText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="press Enter to add a new task"
        ></input>
        <hr></hr>
      </div>
    </>
  );
};

export default Tasks;
