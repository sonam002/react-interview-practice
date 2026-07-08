import React, { useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleIncrease = () => {
        setProgress((prev) => Math.min(prev + 10, 100));
    };

    const handleDecrease = () => {
        setProgress((prev) => Math.max(prev - 10, 0));
    };

    const getBackgroundColor = () => {
        if (progress < 40) return "red";
        if (progress < 80) return "orange";
        return "green";
    };

    return (
        <div
            style={{
                width: "400px",
                margin: "30px auto",
                textAlign: "center",
            }}
        >
            <h1>Progress Bar</h1>

            <div
                style={{
                    width: "100%",
                    height: "30px",
                    border: "2px solid black",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: "20px",
                }}
            >
                <div
                    id="testBgColor"
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        backgroundColor: getBackgroundColor(),
                        transition: "width 0.3s ease",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {progress}%
                </div>
            </div>

            <button
                onClick={handleDecrease}
                disabled={progress === 0}
                style={{ marginRight: "10px" }}
            >
                -10%
            </button>

            <button
                onClick={handleIncrease}
                disabled={progress === 100}
            >
                +10%
            </button>
        </div>
    );
};

export default ProgressBar;