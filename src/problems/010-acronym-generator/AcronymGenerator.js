import { useState } from "react";

function AcronymGenerator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function toAcronym(text) {
    return text
      .trim()
      .split(/\s+/)               // Split by one or more spaces
      .map(word => word[0])       // Take first letter
      .join("")                   // Join letters
      .toUpperCase();             // Convert to uppercase
  }

  function handleGenerate() {
    setResult(toAcronym(input));
  }

  return (
    <div>
      <h1>Acronym Generator</h1>

      <p>
        An acronym is formed by taking the first letter of each word in a
        phrase and converting them to uppercase.
      </p>

      <div>
        <input
          data-testid="input"
          type="text"
          placeholder="Enter a phrase..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          data-testid="generate-button"
          onClick={handleGenerate}
        >
          Generate
        </button>

        <p data-testid="result">
          Result : {result}
        </p>
      </div>
    </div>
  );
}

export default AcronymGenerator;