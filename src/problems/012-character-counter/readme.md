# Character Count – Interview Revision

## 📌 Concepts Covered

- `useState` Hook
- Controlled Components
- Event Handling (`onChange`)
- Conditional Rendering
- Derived State
- Dynamic Input Handling

---

## 📚 Key Logic

### State

```javascript
const [text, setText] = useState("");
const [maxLength, setMaxLength] = useState(50);
```

### Update Text

```javascript
function handleChange(e) {
  setText(e.target.value);
}
```

### Current Length

```javascript
const currentLength = text.length;
```

### Warning Threshold (90%)

```javascript
const warningLimit = Math.ceil(maxLength * 0.9);
```

### Show Warning

```javascript
const showWarning =
  currentLength >= warningLimit &&
  currentLength <= maxLength;
```

### Exceeded Characters

```javascript
const exceeded = currentLength - maxLength;
```

---

## 🧠 Interview Questions

- Why do we use controlled components?
- Why is `text.length` considered derived state?
- Why use `Math.ceil()` instead of `Math.floor()`?
- Why store `maxLength` in state?
- What happens when the maximum length changes?
- Difference between `onChange` and `onInput` in React?
- Why shouldn't `currentLength` be stored in state?

---

## ⚡ Time Complexity

- Character count: **O(1)**
- Warning calculation: **O(1)**
- Render: **O(1)**

---

## 🎯 React Concepts Revised

- `useState`
- Controlled Inputs
- Event Handling
- Conditional Rendering
- Derived State
- JSX Expressions
- Real-time UI Updates