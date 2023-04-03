import React,{useState} from "react";
import Date from "./Date"
import "./Expense.css";
function ExpenseItem(props) {
  
  return (<li>
      <div className="expenseIem-container">
        <Date date={props.date}></Date>
        <div className="expense">{props.title}</div>
        <div className="locationitem">{props.location}</div>
        <div className="amountitem">{props.amount}RS</div>
     </div>
  </li>
  );
}
export default ExpenseItem;
