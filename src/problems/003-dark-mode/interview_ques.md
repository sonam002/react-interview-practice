# 🌙 Dark Mode - Interview Notes

## Q1. How would you implement Dark Mode in React?

**Answer:**
Use `useState` to store whether dark mode is enabled. Toggle the state on button click and conditionally apply CSS classes or styles. React re-renders the UI whenever the state changes.

**Interview One-liner:**
> Dark mode is implemented using a boolean state that conditionally applies light or dark theme styles.

---

## Q2. Why do we use `useState`?

**Answer:**
Dark mode has only two states: **Light** and **Dark**. A boolean state is the simplest way to represent these two values.

**Interview One-liner:**
> Since dark mode has only two states, a boolean `useState` is sufficient.

---

## Q3. How do you persist the selected theme after refresh?

**Answer:**
Store the selected theme in `localStorage`. Read it when the application loads and update it whenever the theme changes.

**Interview One-liner:**
> Store the theme in `localStorage` and initialize the state from it.

---

## Q4. Why do we use `useEffect` in Dark Mode?

**Answer:**
`useEffect` synchronizes the React state with external systems like `localStorage` or `document.body`. It runs whenever the theme changes.

**Interview One-liner:**
> `useEffect` keeps the UI state synchronized with the browser or localStorage.

---

## Q5. How can we apply different themes?

**Answer:**
- CSS Classes ✅
- CSS Variables ✅ (Recommended)
- Inline Styles
- Tailwind `dark` class

**Interview One-liner:**
> The recommended approach is to toggle CSS classes or CSS variables.

---

## Q6. Why are CSS Variables preferred?

**Answer:**
CSS variables let you define colors once and switch themes by changing only variable values, making the code easier to maintain.

**Interview One-liner:**
> CSS variables provide scalable and maintainable theme management.

---

## Q7. What is `prefers-color-scheme`?

**Answer:**
It is a CSS media query that detects whether the user's operating system prefers light or dark mode.

**Interview One-liner:**
> It automatically matches the application's theme with the user's system preference.

---

## Q8. How can you improve a basic Dark Mode implementation?

- Persist theme using `localStorage`
- Detect system theme (`prefers-color-scheme`)
- Use CSS Variables
- Add smooth transitions
- Improve accessibility (ARIA)
- Support keyboard navigation

---

## Q9. Which React concepts are covered?

- `useState`
- `useEffect`
- Event Handling
- Conditional Rendering
- Dynamic Styling
- `localStorage`

---

## Q10. Explain the flow.

```text
Button Click
      ↓
Toggle Boolean State
      ↓
React Re-renders
      ↓
Apply Dark/Light Styles
      ↓
useEffect Syncs localStorage
```

---

# 🎯 Pattern Recognition

### Pattern
**Boolean Toggle**

### State

```jsx
const [darkMode, setDarkMode] = useState(false);
```

### Event
`onClick`

### Similar Problems

- Toggle Password
- Accordion
- Sidebar
- Modal
- Dropdown
- Hamburger Menu
- Show More / Show Less

---

# 📝 Revision Notes

- One boolean state controls the entire theme.
- Toggle state → React re-renders → Theme changes.
- Use `useEffect` to sync with `localStorage`.
- Prefer CSS variables for scalable themes.

---

# 🎤 1-Minute Interview Answer

> "Dark mode is implemented using a boolean state that tracks whether the application is in light or dark mode. Clicking the toggle updates the state, causing React to re-render with different styles. I use `useEffect` to synchronize the theme with `localStorage` so the user's preference persists after refresh. In production, I'd also support `prefers-color-scheme`, CSS variables, and accessibility improvements."