import React, { useState } from "react";
import "./style.css";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateMortgage = () => {
    const P = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(loanTerm);

    if (P <= 0 || annualRate <= 0 || years <= 0) {
      setError("Invalid Input");
      setResult(null);
      return;
    }

    setError("");

    const r = annualRate / 12 / 100;
    const n = years * 12;

    const M =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setResult(M.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Mortgage Calculator</h1>

      <div>
        <label>
          Loan Amount (INR):
          <input
            aria-label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Annual Interest Rate (%):
          <input
            aria-label="Annual Interest Rate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Loan Term (Years):
          <input
            aria-label="Loan Term"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>
      </div>

      <button onClick={calculateMortgage}>Calculate</button>

      {error && <p>{error}</p>}

      {result && (
        <h3 aria-label="result">
          Monthly Payment: {result}
        </h3>
      )}
    </div>
  );
}

export default MortgageCalculator;