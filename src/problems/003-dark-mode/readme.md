# Dark Mode

**Purpose**: Implements a dark/light mode toggle for the app.

### Typical pattern

- Use `useState` to track whether dark mode is enabled.
- Apply a CSS class or inline styles based on that state.
- Use `useEffect` to persist the preference in `localStorage` or sync with the document body.

### Example behavior

- Toggle button switches between dark and light themes.
- Dark mode can be stored so it stays active on reload.
- UI updates without a full page refresh by re-rendering on state change.

### Improvements

- Add `prefers-color-scheme` support to initialize the theme.
- Use CSS variables for easier theme management.
- Add accessibility labels and keyboard support for the toggle.
