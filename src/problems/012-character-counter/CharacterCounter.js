import { useState } from "react";

function CharacterCount() {
  const [text, setText] = useState("");
  const [maxLength, setMaxLength] = useState(50);

  function handleChange(e) {
    setText(e.target.value);
  }

  const currentLength = text.length;
  const warningLimit = Math.ceil(maxLength * 0.9);

  const showWarning =
    currentLength >= warningLimit && currentLength <= maxLength;

  const exceeded = currentLength - maxLength;

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
              data-testid="maxlength"
            />
          </label>
        </div>

        <textarea
          className="text"
          placeholder="Start Typing"
          value={text}
          onChange={handleChange}
          data-testid="textarea"
        ></textarea>

        <div className="char-info" data-testid="char-info">
          {currentLength} / {maxLength}
        </div>

        <div className="warnings">
          {showWarning && (
            <p className="warning-text" data-testid="warning-text">
              You are close to the limit!
            </p>
          )}

          {currentLength > maxLength && (
            <p className="error-message" data-testid="error-text">
              Limit exceeded by {exceeded} characters
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterCount;