function ExpenseItem() {
  const expenseDate = new Date(2023, 3, 24);
  const expenseTitle = "Food";
  const expenseAmt = 250;
  const expenseLocation = "Amravati";
  return (
    <div className="container">
      <div className="heading-container">
        <h6>Monthly Expense</h6>
      </div>
      <div className="item-container">
        <ol>
          <li>
            {expenseDate.toISOString()} - {expenseTitle} - {expenseAmt}-
            {expenseLocation}
          </li>
          <li>
            {expenseDate.toISOString()} - {expenseTitle} - {expenseAmt}-
            {expenseLocation}
          </li>
          <li>
            {expenseDate.toISOString()} - {expenseTitle} - {expenseAmt}-
            {expenseLocation}
          </li>
          <li>
            {expenseDate.toISOString()} - {expenseTitle} - {expenseAmt}-
            {expenseLocation}
          </li>
        </ol>
      </div>
    </div>
  );
}
export default ExpenseItem;
