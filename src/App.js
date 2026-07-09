import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ProgressBar from "./problems/001-progress-bar/ProgressBar";
import BacktoTop from "./problems/002-back-to-top/BacktoTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className = "app">
            {/*<ProgressBar />*/}
            <BacktoTop />
        </div>
    );
};

root.render(<App/>);