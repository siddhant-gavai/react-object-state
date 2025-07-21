# 🎲 LudoBoard - Day 4 (React useState Practice)

This mini React project demonstrates how to manage **multiple related state values** using a **single object** inside the `useState` hook.

---

## 📌 What I Learned

- Managing multiple pieces of state (blue, red, yellow, green moves) inside one object
- Updating specific keys in the object using the spread operator
- Using functional form of `setState` to get the previous value
- Creating separate update functions for each move color

---

## 🧠 Key Concepts

### ✅ useState with Object

```js
const [Moves, setMoves] = useState({
  blue: 0,
  yellow: 0,
  red: 0,
  green: 0,
});
```
