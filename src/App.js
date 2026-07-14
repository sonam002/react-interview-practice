import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ProgressBar from "./problems/001-progress-bar/ProgressBar";
import BacktoTop from "./problems/002-back-to-top/BacktoTop";
import DarkMode from "./problems/003-dark-mode/DarkMode";
import Counter from "./problems/004-usePreviousHook/Counter";
import TogglePassword from "./problems/005-toggle-password/TogglePassword"

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className = "app">
            {/*<ProgressBar />*/}
            {/*<BacktoTop />*/}
            {/*<DarkMode /> */}
            {/*<Counter /> */}
            <TogglePassword />
        </div>
    );
};

root.render(<App/>);