import { useState } from "react";
import Header from "./components/Header.jsx";
import IncomeForm from "./components/IncomeForm.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Summary from "./components/Summary.jsx";
import "./App.css";

// A list of categories. We send it to other components as a prop.
const CATEGORIES = ["Food", "Transport", "Education", "Entertainment", "Other"];

function App() {
  // State: data that can change while the app is running.
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Add a new expense: copy the old array and put the new item at the end.
  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  // Delete an expense: keep every expense EXCEPT the one with this id.
  function deleteExpense(idToDelete) {
    const remainingExpenses = expenses.filter(
      (expense) => expense.id !== idToDelete
    );
    setExpenses(remainingExpenses);
  }

  // Calculated values (we do not store these in state, we just calculate them).
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Math.round(... * 100) / 100 avoids tiny decimal errors like 0.30000000000000004.
  const savings = Math.round((income - totalExpenses) * 100) / 100;

  return (
    <div className="app">
      <Header />

      <main className="layout">
        <div className="column">
          <IncomeForm onSetIncome={setIncome} />
          <ExpenseForm categories={CATEGORIES} onAddExpense={addExpense} />
        </div>

        <div className="column">
          <Summary
            income={income}
            totalExpenses={totalExpenses}
            savings={savings}
            expenses={expenses}
            categories={CATEGORIES}
          />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
      </main>
    </div>
  );
}

export default App;
