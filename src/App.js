import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ProgressBar from "./problems/001-progress-bar/ProgressBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className = "app">
            <ProgressBar />
        </div>
    );
};

root.render(<App/>);