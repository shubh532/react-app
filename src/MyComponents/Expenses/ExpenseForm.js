import "./ExpenseForm.css";
function Form() {
    const change=(event)=>{
        console.log(event.target.value)
    }
  return (
    <form className="Form-container" onChange={change} >
      <div className="form-date">
        <label for="date">Date</label>
        <input type="date" name="date" ClassName="date" />
      </div>
      <div className="form-title">
        <label for="expensetitle">ExpenseTitle</label>
        <input type="text" name="expensetitle" ClassName="expensetitle"/>
      </div>
      <div className="form-loction">
        <label for="location">Location</label>
        <input type="text" name="location" ClassName="location" />
      </div>
      <div className="form-amount">
        <label for="amount">Amount</label>
        <input type="number" name="amount" ClassName="amount" />
      </div>
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  );
}

export default Form;
