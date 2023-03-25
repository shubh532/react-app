function ExpenseItem(props) {
  return (
      <div className="expenseIem-container">
        <div className="date">{props.no}) {props.date.toDateString()}</div>
        <div className="expense">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="amount">{props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
