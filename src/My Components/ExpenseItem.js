import Date from "./Date"
import "./Expense.css";
function ExpenseItem(props) {
  return (
      <div className="expenseIem-container">
        <Date date={props.date}></Date>
        <div className="expense">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="amount">{props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
