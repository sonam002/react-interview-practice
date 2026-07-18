# URL Validator

### Purpose
Shows how to validate a user-entered URL in React using a regular expression and local state.

### What it does
- Renders an input field for entering a URL.
- Tracks the typed value with `useState`.
- Validates the input on every change using a regex.
- Displays a green or red message depending on whether the URL is valid.

### Implementation
```jsx
const [input, setInput] = useState("");
const [isValid, setIsValid] = useState(null);

function validateUrl(value) {
  setInput(value);

  const regex =
    /^https?:\/\/(?:localhost(?::\d+)?|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?:\/\S*)?$/;

  setIsValid(regex.test(value));
}
```

```jsx
<input
  data-testid="url-input"
  type="text"
  placeholder="Enter URL"
  value={input}
  onChange={(e) => validateUrl(e.target.value)}
/>
```

### Key Concepts
- `useState` manages both the input value and the validation result.
- A regex can be used to check whether a string matches a URL pattern.
- Conditional rendering can show feedback based on validation state.

### Interview One-liner
> A URL validator component checks user input against a pattern and shows whether it is valid or invalid.

### Remember in one line
> **Validation logic and UI feedback work together to guide users in real time.**
