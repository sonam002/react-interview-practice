import React, { useEffect, useState } from 'react';
import './style.css'

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`container ${isDark ? "dark-mode" : "light-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input 
          type="checkbox"
          checked = {isDark}
          onChange = {() => setIsDark(!isDark)}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;