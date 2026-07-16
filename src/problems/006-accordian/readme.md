# Accordion

### Purpose
Shows how to build a simple accordion UI in React using state.

### What it does
- Displays a list of items with a title and expandable content.
- Keeps track of which item is currently open.
- Toggles the content panel when the user clicks a title.
- Uses icons to show whether the item is collapsed or expanded.

### Implementation
```js
const [openIndex, setOpenIndex] = useState(null);

const handleClick = (index) => {
  setOpenIndex((prev) => (prev === index ? null : index));
};
```

```jsx
<Accordion items={items} />
```

### Example Data
```js
const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  }
];
```

### Key Concepts
- `useState` stores the currently open accordion item.
- Conditional rendering shows or hides the content panel.
- Clicking a title updates the state and toggles the view.

### Interview One-liner
> An accordion component uses state to manage which panel is open, creating a compact expandable UI.

### Remember in one line
> **State controls expansion; clicking a title opens or closes its content.**
