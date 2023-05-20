import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Pen & Notebook",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOFExpenditure: "Study",
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 12),
      locationOFExpenditure: "Travel",
    },
    {
      id: "e3",
      title: "New Tv",
      amount: 799.49,
      date: new Date(2021, 2, 28),
      locationOFExpenditure: "Entertainment",
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOFExpenditure: "Furniture",
    },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Expense Items"),
    React.createElement(Expenses, { items: expenses })
  );

  // return (
  //   <div>
  //     <h2>Expense Items</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );
};

export default App;

// this is task 11.how to write code
// return React.createElement(
//   'div',
//   { className: 'expense-item' },
//   React.createElement(ExpenseDate, { date: props.date }),
//   React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Expense 1'),
//     React.createElement('h1', {}, 'Expense 2')
//   ),
//   React.createElement('div', {})
// );
