import ExpenseItem from "./MyComponents/Expenses/ExpenseItem";
import Card from "./MyComponents/UI/Card";
import ExpenseFilter from "./MyComponents/Expenses/expenseFilter";
import FormData from "./MyComponents/Expenses/RetriveDataFromForm";
import { useState } from "react";
// import "./App.css"
function App() {
  const [filteredYear,setFilteredYear]=useState("2016")
  const expense = new Array(5).fill({
    date: new Date(),
    title: "Car Insurance",
    location: "Amaravati",
    amount: "2500Rs",
  });

  const filterChange=selectedYear=>{
    setFilteredYear(selectedYear)
  }
  return (
    <div className="App">
      <div className="heading-container">EXPENSE TRACKER</div>
        <FormData/>
        <Card>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChange}></ExpenseFilter>
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
