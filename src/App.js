import ExpenseItem from "./MyComponents/Expenses/ExpenseItem";
import Card from "./MyComponents/UI/Card";
import Form from "./MyComponents/Expenses/ExpenseForm";
// import "./App.css"
function App() {
  const expense = new Array(5).fill({
    date: new Date(),
    title: "Car Insurance",
    location: "Amaravati",
    amount: "2500Rs",
  });
  return (
    <div className="App">
      <div className="heading-container">EXPENSE TRACKER</div>
        <Form></Form>
        <Card>
          {expense.map((item)=>( 
          <ExpenseItem
              date={item.date}
              title={item.title}
              location={item.location}
              amount={item.amount}
            ></ExpenseItem>)
            )}
        </Card>

    </div>
  );
}

export default App;
