import { useState } from "react";

function URLValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl(value) {
    setInput(value);

    const regex =
      /^https?:\/\/(?:localhost(?::\d+)?|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?:\/\S*)?$/;

    setIsValid(regex.test(value));
  }

  return (
    <div>
      <h1>URL Validator</h1>

      <div className="container">
        <input
          data-testid="url-input"
          type="text"
          placeholder="Enter URL"
          value={input}
          onChange={(e) => validateUrl(e.target.value)}
        />

        {isValid !== null && (
          <p
            data-testid="result"
            style={{ color: isValid ? "green" : "red" }}
          >
            {isValid ? "Valid URL" : "Invalid URL"}
          </p>
        )}
      </div>
    </div>
  );
}

export default URLValidator;