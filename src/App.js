import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ProgressBar from "./problems/001-progress-bar/ProgressBar";
import BacktoTop from "./problems/002-back-to-top/BacktoTop";
import DarkMode from "./problems/003-dark-mode/DarkMode";
import Counter from "./problems/004-usePreviousHook/Counter";
import TogglePassword from "./problems/005-toggle-password/TogglePassword";
import Accordion from "./problems/006-accordian/Accordian";
import FocusInput from "./problems/007-focus-input/FocusInput";
import URLValidator from "./problems/008-url-validator/URLValidator";
import MortgageCalculator from "./problems/009-mortgage-calculator/MortgageCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    const items = [
        {
            title: "JavaScript Basics",
            content: "Learn variables, functions, and loops in JavaScript."
        },
        {
            title: "React.js Overview",
            content: "Understand components, state, and props in React."
        },
        {
            title: "Node.js",
            content: "Basics of server-side development with Node.js."
        },
        {
            title: "Full-Stack Development",
            content: "Build full-stack apps with React and Node.js."
        },
        {
            title: "Frontend Development",
            content: "Build frontend apps with React"
        }
    ];

    return (
        <div className="app">
            {/*<ProgressBar />*/}
            {/*<BacktoTop />*/}
            {/*<DarkMode /> */}
            {/*<Counter /> */}
            {/*<TogglePassword /> */}
            {/*<Accordion items={items} /> */}
            {/*<FocusInput />*/}
            {/*<URLValidator />*/}
            <MortgageCalculator />
        </div>
    );
};

root.render(<App/>);