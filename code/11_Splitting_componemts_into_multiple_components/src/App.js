import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>ExpenseItem</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        locationOFExpenditure={expenses[0].locationOFExpenditure}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOFExpenditure={expenses[1].locationOFExpenditure}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOFExpenditure={expenses[2].locationOFExpenditure}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOFExpenditure={expenses[3].locationOFExpenditure}
      />
    </div>
  );
}

export default App;
