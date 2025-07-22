import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const containerStyle = {
    maxWidth: "500px",
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
    padding: "8px 14px",
    fontSize: "14px",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginRight: "8px",
    whiteSpace: "nowrap",
  };

  const actionButtonStyle = {
    padding: "6px 10px",
    fontSize: "13px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    marginLeft: "6px",
  };

  const headingStyle = {
    marginTop: "30px",
    textAlign: "center",
    color: "#333",
  };

  const taskItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    padding: "8px 0",
  };

  const taskTextStyle = (done) => ({
    textDecoration: done ? "line-through" : "none",
    flex: "1",
    marginRight: "10px",
    fontSize: "15px",
    color: "#333",
  });

  let [tasks, setTasks] = useState([
    { task: "Code", id: uuidv4(), done: false },
  ]);
  let [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((preValues) => [
        ...preValues,
        { task: newTask, id: uuidv4(), done: false },
      ]);
      setNewTask("");
    }
  };

  const updateTaskValue = (e) => setNewTask(e.target.value);

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((todo) => todo.id !== id));
  };

  const upercaseAll = () => {
    setTasks((prev) =>
      prev.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const upercaseOne = (id) => {
    setTasks((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  const markDone = (id) => {
    setTasks((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
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
      <ul style={{ padding: 0, listStyle: "none" }}>
        {tasks.map((todo) => (
          <li key={todo.id} style={taskItemStyle}>
            <span style={taskTextStyle(todo.done)}>{todo.task}</span>
            <div style={{ display: "flex" }}>
              <button
                onClick={() => markDone(todo.id)}
                style={{
                  ...actionButtonStyle,
                  backgroundColor: "#2196f3",
                  color: "white",
                }}
              >
                ✔️
              </button>
              <button
                onClick={() => upercaseOne(todo.id)}
                style={{
                  ...actionButtonStyle,
                  backgroundColor: "#9c27b0",
                  color: "white",
                }}
              >
                Aa↗️
              </button>
              <button
                onClick={() => deleteTask(todo.id)}
                style={{
                  ...actionButtonStyle,
                  backgroundColor: "#ff4d4d",
                  color: "white",
                }}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={upercaseAll} style={buttonStyle}>
          UPPERCASE ALL
        </button>
        <button
          onClick={() => setTasks([])}
          style={{ ...buttonStyle, backgroundColor: "#e91e63" }}
        >
          CLEAR ALL
        </button>
      </div>
    </div>
  );
};

export default TodoList;
