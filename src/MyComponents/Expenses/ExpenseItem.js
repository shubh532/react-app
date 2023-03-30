import React,{useState} from "react";
import Date from "./Date"
import "./Expense.css";
function ExpenseItem(props) {
  const[val,setVal]=useState(props.amount)
  const fun=()=>{
    setVal("100$")
  }
  return (
      <div className="expenseIem-container">
        <Date date={props.date}></Date>
        <div className="expense">{props.title}</div>
        <div className="locationitem">{props.location}</div>
        <div className="amountitem">{val}</div>
        <button onClick={fun} className="buttonitem">Add</button>
    </div>
  );
}
export default ExpenseItem;
