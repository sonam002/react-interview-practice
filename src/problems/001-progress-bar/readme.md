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
