import React, { useState } from "react";
import "./styles.css";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // Active tab state
  const [activeTab, setActiveTab] = useState("home");

  // Find currently active tab
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-testid={`tab-button-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {currentTab?.content}
      </div>
    </div>
  );
}
