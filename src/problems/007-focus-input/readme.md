# Focus Input

### Purpose
Shows how to focus an input element programmatically in React using refs.

### What it does
- Renders a text input and a button.
- Uses `useRef` to hold a reference to the input element.
- Clicking the button moves the cursor into the input field.

### Implementation
```jsx
const inputRef = useRef(null);

const handleFocus = () => {
  inputRef.current.focus();
};
```

```jsx
<input ref={inputRef} type="text" placeholder="Type here" />
<button onClick={handleFocus}>Focus Input</button>
```

### Key Concepts
- `useRef` stores a mutable reference without causing re-renders.
- The `ref` prop connects the component to a DOM element.
- Calling `.focus()` programmatically places the cursor inside the input.

### Interview One-liner
> A focus input component uses refs to access a DOM element directly and bring attention to it.

### Remember in one line
> **Refs give direct access to elements; use them to focus inputs on demand.**
