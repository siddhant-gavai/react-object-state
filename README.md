# 🎲 LudoBoard - Day 4 (React useState Practice)

This mini React project demonstrates how to manage **multiple related state values** using both a **single object** and an **array** inside the `useState` hook.

---

## 📌 What I Learned

- Managing multiple color-wise counters using an object state
- Tracking move history using an array state
- Using the spread operator to preserve previous state while updating
- Creating individual update functions for each color
- Updating state based on the previous state using the functional form of `setState`

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

🔧 How to Run
npm install
npm run dev
```
