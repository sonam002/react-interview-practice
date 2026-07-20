# Acronym Generator

Create a React component that converts a phrase into an acronym by taking the first letter of each word and converting the result to uppercase.

## Problem Statement

Build a small UI that:
- accepts a phrase from the user
- generates an acronym from the entered text
- displays the result on the screen

## Example

Input:
- "Artificial Intelligence"

Output:
- "AI"

## Expected Behavior

- The input should be read from a text field.
- The generate button should produce the acronym.
- The output should be shown in uppercase.

## Implementation Notes

A simple approach is to:
1. store the input phrase in state
2. split the text into words
3. take the first character of each word
4. join the letters together
5. convert the final result to uppercase

## Example Code Logic

```javascript
function toAcronym(text) {
  return text
    .trim()
    .split(/\s+/)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}
```
