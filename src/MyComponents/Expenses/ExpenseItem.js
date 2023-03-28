import Date from "./Date"
import "./Expense.css";
function ExpenseItem(props) {
  const fun=()=>{
    alert("BUTTON IS CLICKED")
  }
  return (
      <div className="expenseIem-container">
        <Date date={props.date}></Date>
        <div className="expense">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="amount">{props.amount}</div>
        <button onClick={fun} className="button">Delete</button>
    </div>
  );
}
export default ExpenseItem;
