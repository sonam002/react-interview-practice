# Toggle Password

### Purpose
Shows how to toggle password visibility in a form input using React state.

### What it does
- Keeps track of whether the password is visible or hidden.
- Switches the input type between `password` and `text`.
- Uses an icon button to let the user toggle visibility.

### Implementation
```js
const [showPassword, setShowPassword] = useState(false);

<input
  type={showPassword ? "text" : "password"}
  placeholder="Enter password"
/>

<span onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? <Eye /> : <EyeOff />}
</span>
```

### Key Concepts
- `useState` manages the visibility toggle.
- Conditional rendering changes the icon based on state.
- The input type updates dynamically for better UX.

### Interview One-liner
> A toggle password component uses state to switch between hidden and visible password input modes, improving usability without changing the form structure.

### Remember in one line
> **State controls visibility; clicking the icon flips the input type and icon.**
