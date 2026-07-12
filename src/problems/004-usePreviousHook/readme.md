# usePrevious Hook

### Purpose
Stores and returns the **previous value** of a state or prop.

### Why `useRef`?

- Stores a value **without causing a re-render**.
- Persists across renders.

### Implementation

```js
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```

### Flow

```
Render
   ↓
Return previous value (ref.current)
   ↓
Paint UI
   ↓
useEffect runs
   ↓
ref.current = current value
```

### Key Points

- `useRef()` → stores mutable value.
- `useEffect()` → updates ref **after** render.
- First render returns `undefined`.
- Doesn't trigger re-renders.

### Interview One-liner

> `usePrevious` uses `useRef` to remember the value from the previous render. The ref is updated inside `useEffect`, so during the next render it contains the previous value.

### Remember in one line

> **Current render → return old ref → `useEffect` updates ref → next render gets previous value.**
