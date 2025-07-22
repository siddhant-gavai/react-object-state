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
  const deleteBUttonStyle = {
    margin: "10px 10px",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ff4d4d",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  };

  let [tasks, setTasks] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks((preValues) => {
      return [...preValues, { task: newTask, id: uuidv4() }];
    });
    setNewTask("");
  };

  let updateTaskValue = (event) => {
    setNewTask(event.target.value);
  };
  const deleteTask = (id) => {
    setTasks((preValue) => tasks.filter((preValue) => preValue.id !== id));
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
            <span>{tasks.task}</span>
            <button
              onClick={() => deleteTask(tasks.id)}
              style={deleteBUttonStyle}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
