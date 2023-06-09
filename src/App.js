import ExpenseList from "./MyComponents/Expenses/expenseList";
import Card from "./MyComponents/UI/Card";
import ExpenseFilter from "./MyComponents/Expenses/expenseFilter";
import ExpenseChart from "./MyComponents/UI/expenseChart";
import FormData from "./MyComponents/Expenses/RetriveDataFromForm";
import { useState } from "react";
// import "./App.css"
const expense =[{
  id:15478963,
  date: new Date(),
  title: "Car Insurance",
  location: "Amaravati",
  amount: "2500",
}];
function App() {
  const [filteredYear,setFilteredYear]=useState("2023")
  const [oldExpense,setNewExpense]=useState(expense)


  const addExpenseToScreen=(expenseData)=>{
  setNewExpense((prevExpense)=>{
    return[expenseData,...prevExpense]
  })
}
  const filterChange=selectedYear=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpens=oldExpense.filter((Expense)=>{
    return Expense.date.getFullYear().toString()===filteredYear;
  })

  

  return (
    <div className="App">
      <div className="heading-container">EXPENSE TRACKER</div>
        <FormData takeData={addExpenseToScreen}/>
        <Card>
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChange}></ExpenseFilter>
          <ExpenseChart expenses={filteredExpens}></ExpenseChart>
          <ExpenseList items={filteredExpens}></ExpenseList>
        </Card>

    </div>
  );
}

export default App;
