# Progress Bar

This React progress bar component tracks completion from 0% to 100% using state.

- Two buttons update progress by ±10%.
- Progress is clamped so it never goes below 0% or above 100%.
- The filled bar width is driven by `progress` and transitions smoothly.
- The bar color changes based on progress:
  - red for less than 40%
  - orange for 40–79%
  - green for 80% and above
- Buttons are disabled when progress reaches the minimum or maximum value.

## Interview Questions

1. How would you implement a progress bar in React?
   - Answer: Use `useState` to store the current progress value and render the filled bar width from that state.

2. What state would you use to control the progress value?
   - Answer: A single `progress` state variable, typically initialized to `0`.

3. How do you prevent the progress from going below 0% or above 100%?
   - Answer: Clamp the value using `Math.max` and `Math.min` when updating it.

4. Why do we use `Math.min` and `Math.max` in the button handlers?
   - Answer: They keep the progress within the valid range while increasing or decreasing it.

5. How would you make the bar width update smoothly when progress changes?
   - Answer: Use CSS transition on the width property, such as `transition: "width 0.3s ease"`.

6. How would you change the bar color based on the current progress value?
   - Answer: Use a helper function that returns different colors for different ranges, for example red, orange, and green.

7. How would you disable buttons when the progress reaches the boundaries?
   - Answer: Set `disabled={progress === 0}` or `disabled={progress === 100}` on the buttons.

8. What is the difference between controlled state and directly manipulating the DOM in this component?
   - Answer: React uses state to drive the UI, so the component re-renders based on state changes instead of manually changing DOM elements.
