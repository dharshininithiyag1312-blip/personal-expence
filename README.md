# Budget Tracker

A beginner-friendly React app (built with Vite) for tracking income, expenses and savings.

## What it does

- Set your income.
- Add expenses with a name, amount and category (Food, Transport, Education, Entertainment, Other).
- See total income, total expenses, total savings and a total for each category.
- See a message that changes depending on whether you are saving, breaking even, or overspending.
- Delete any expense.

## Project structure

```
budget-tracker/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── IncomeForm.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── Summary.jsx
│   │   └── CategorySummary.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js      <- small extra file Vite needs to read React code
└── README.md
```

## Install and run

You need [Node.js](https://nodejs.org) version 18 or newer.

1. Open a terminal in the `budget-tracker` folder.
2. Install the packages:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. Open the address shown in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # make a production version in the "dist" folder
npm run preview   # preview the production version
```

Press `Ctrl + C` in the terminal to stop the dev server.

## Learn more

See `LEARNING_GUIDE.md` for pseudocode, a flowchart, concept explanations, a Human vs AI comparison and student reflection questions.
