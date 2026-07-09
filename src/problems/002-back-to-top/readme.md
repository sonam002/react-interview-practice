# Back to Top

**Purpose**: Provides a button that appears after scrolling and scrolls the page to the top.

**State**: Uses `isVisible` with `useState` to control whether the button is shown.

**Scroll detection**: `useEffect` adds a scroll listener that sets `isVisible` when `window.scrollY` exceeds a threshold (for example, `500`).

**Cleanup**: Removes the event listener in the effect's cleanup to avoid memory leaks.

**Action**: `scrollToTop()` calls `window.scrollTo({ top: 0, behavior: "smooth" })` for smooth scrolling.

**Render & test**: The button is conditionally rendered using `{isVisible && <button ...>}` and can include a `data-testid` for testing.

**Improvements**: Debounce or throttle the scroll handler for better performance, and add an `aria-label` and keyboard support for accessibility.
