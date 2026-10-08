function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <section className="card">
      <h2>Your expenses</h2>

      {/* Conditional rendering: show a message OR the table. */}
      {expenses.length === 0 ? (
        <p className="empty">No expenses yet. Add your first one using the form.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Expense name</th>
                <th className="number">Amount</th>
                <th>Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.name}</td>
                  <td className="number">${expense.amount.toFixed(2)}</td>
                  <td>
                    <span className={`tag cat-${expense.category.toLowerCase()}`}>
                      {expense.category}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => onDeleteExpense(expense.id)}
                      aria-label={`Delete ${expense.name}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ExpenseList;
