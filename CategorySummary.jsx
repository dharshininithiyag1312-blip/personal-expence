function CategorySummary({ expenses, categories, totalExpenses }) {
  // For each category: filter its expenses, then add them up with reduce.
  const categoryTotals = categories.map((categoryName) => {
    const total = expenses
      .filter((expense) => expense.category === categoryName)
      .reduce((sum, expense) => sum + expense.amount, 0);

    // What share of all spending is this category?
    const percent =
      totalExpenses > 0 ? Math.round((total / totalExpenses) * 100) : 0;

    return { name: categoryName, total: total, percent: percent };
  });

  return (
    <div className="category-summary">
      <h3>Spending by category</h3>

      <ul className="category-list">
        {categoryTotals.map((item) => (
          <li key={item.name} className={`category-row cat-${item.name.toLowerCase()}`}>
            <div className="category-text">
              <span className="category-name">{item.name} expenses</span>
              <span className="category-amount">
                ${item.total.toFixed(2)} ({item.percent}%)
              </span>
            </div>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${item.percent}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySummary;
