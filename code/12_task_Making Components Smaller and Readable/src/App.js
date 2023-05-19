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
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOFExpenditure={expense.locationOFExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
