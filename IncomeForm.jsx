import { useState } from "react";

// Props: onSetIncome is a function that App gives us.
function IncomeForm({ onSetIncome }) {
  const [incomeText, setIncomeText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading

    const amount = Number(incomeText);

    // Check the input before using it.
    if (incomeText === "" || amount < 0) {
      setError("Enter an income of 0 or more.");
      return;
    }

    onSetIncome(amount); // tell App the new income
    setIncomeText(""); // clear the input box
    setError("");
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Monthly income</h2>

      <label htmlFor="income">Enter monthly income</label>
      <input
        id="income"
        type="number"
        min="0"
        step="0.01"
        placeholder="e.g. 1500"
        value={incomeText}
        onChange={(event) => setIncomeText(event.target.value)}
      />
      <p className="hint">A new amount replaces the old one.</p>

      {error !== "" && <p className="error">{error}</p>}

      <button type="submit" className="btn">
        Set income
      </button>
    </form>
  );
}

export default IncomeForm;
