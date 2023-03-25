import "./My Components/Expense.css";
import ExpenseItem from "./My Components/ExpenseItem";
function App() {
  const expense = new Array(100).fill({
    no:1,
    date: new Date(),
    title: "Car Insurance",
    location: "Amaravati",
    amount: "2500Rs",
  });
  return (
    <div className="App">
      <div className="heading-container">EXPENSE TRACKER</div>
      {expense.map(item=>( <ExpenseItem
        no={item.no++}
        date={item.date}
        title={item.title}
        location={item.location}
        amount={item.amount}
      ></ExpenseItem>)
      )}
     
    </div>
  );
}

export default App;
