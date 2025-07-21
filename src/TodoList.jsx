import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  const headingStyle = {
    marginTop: "30px",
    textAlign: "center",
    color: "#333",
  };
  let [tasks, setTasks] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { task: newTask, id: uuidv4() }]);
    setNewTask("");
  };

  let updateTaskValue = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Enter today's task"
        value={newTask}
        onChange={updateTaskValue}
        style={inputStyle}
      />
      <button onClick={addTask} style={buttonStyle}>
        Add Task
      </button>
      <h2 style={headingStyle}>📝 Todo List</h2>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={tasks.id} style={{ margin: "10px 0", color: "#555" }}>
            {tasks.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
