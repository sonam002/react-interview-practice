# Tab Switcher

A simple React component that switches between tabs and shows different content for each one.

## Features

- Renders multiple tabs with distinct labels
- Highlights the active tab
- Displays content based on the selected tab

## How it works

- The component stores the active tab in state using `useState`
- Clicking a tab updates the active tab
- The currently selected tab's content is displayed below the buttons

## Usage

Import and render the component in your app:

```jsx
import TabSwitcher from "./problems/011-tab-switcher/TabSwitcher";

function App() {
  return <TabSwitcher />;
}
```
