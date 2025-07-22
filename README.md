# 🎲 LudoBoard - Day 4-5 (React useState Practice)

This mini React project demonstrates how to manage **multiple related state values** using both a **single object** and an **array** inside the `useState` hook.

---

## 📌 What I Learned

- Managing multiple color-wise counters using an object state
- Tracking move history using an array state
- Using the spread operator to preserve previous state while updating
- Creating individual update functions for each color
- Updating state based on the previous state using the functional form of `setState`
- Implemented delete functionality to remove tasks from the list

---

## 🧠 Key Concepts

### ✅ Object-based State

```js
const [Moves, setMoves] = useState({
  blue: 0,
  yellow: 0,
  red: 0,
  green: 0,
});


 # 📝 Todo List -  (React useState Practice)

This mini React project demonstrates how to build a functional **Todo List** using the `useState` hook. The app allows users to add tasks and displays them in a neatly styled interface.

---

## 📌 What I Learned

- Using `useState` to manage string and array state
- Handling user input with controlled components
- Updating array state immutably using the spread operator
- Rendering dynamic lists using `.map()`
- Styling React components using inline CSS
- Used `.filter()` method to remove the task by its `id`
- Styled buttons, inputs, and layout using inline CSS
- Added markDone functionality to toggle task completion with a strike-through
- Used uuid package to generate unique task IDs

---

## 🧠 Key Concepts

### 🔹 Input State


const [newTask, setNewTask] = useState("");

🔧 How to Run
npm install
npm run dev
```
