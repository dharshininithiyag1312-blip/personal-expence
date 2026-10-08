import CategorySummary from "./CategorySummary.jsx";

function Summary({ income, totalExpenses, savings, expenses, categories }) {
  // Pick a CSS class depending on the savings value.
  let statusClass = "neutral";
  if (savings > 0) {
    statusClass = "positive";
  } else if (savings < 0) {
    statusClass = "negative";
  }

  return (
    <section className="card">
      <h2>Summary</h2>

      <div className="stats">
        <div className="stat">
          <p className="stat-label">Total Income</p>
          <p className="stat-value">${income.toFixed(2)}</p>
        </div>
        <div className="stat">
          <p className="stat-label">Total Expenses</p>
          <p className="stat-value">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="stat">
          <p className="stat-label">Total Savings</p>
          <p className={`stat-value ${statusClass}`}>${savings.toFixed(2)}</p>
        </div>
      </div>

      {/* Conditional rendering: only ONE of these messages will show. */}
      <div className={`status ${statusClass}`} role="status">
        {savings > 0 && <p>You are saving money!</p>}
        {savings === 0 && <p>Your income equals your expenses.</p>}
        {savings < 0 && <p>You are spending more than your income.</p>}
      </div>

      <CategorySummary
        expenses={expenses}
        categories={categories}
        totalExpenses={totalExpenses}
      />
    </section>
  );
}

export default Summary;
