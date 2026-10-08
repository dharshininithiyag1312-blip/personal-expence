import { useState } from "react";

// Props: categories (a list) and onAddExpense (a function) come from App.
function ExpenseForm({ categories, onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const amountNumber = Number(amount);

    if (name.trim() === "" || amount === "" || amountNumber <= 0) {
      setError("Enter a name and an amount greater than 0.");
      return;
    }

    // Build one expense object and send it up to App.
    const newExpense = {
      id: Date.now(), // a simple unique number
      name: name.trim(),
      amount: amountNumber,
      category: category,
    };
    onAddExpense(newExpense);

    // Reset the form.
    setName("");
    setAmount("");
    setCategory(categories[0]);
    setError("");
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add an expense</h2>

      <label htmlFor="expense-name">Expense name</label>
      <input
        id="expense-name"
        type="text"
        placeholder="e.g. Lunch"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="expense-amount">Expense amount</label>
      <input
        id="expense-amount"
        type="number"
        min="0"
        step="0.01"
        placeholder="e.g. 12.50"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <label htmlFor="expense-category">Expense category</label>
      <select
        id="expense-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {error !== "" && <p className="error">{error}</p>}

      <button type="submit" className="btn">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
