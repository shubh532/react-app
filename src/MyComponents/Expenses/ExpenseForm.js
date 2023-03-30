import "./ExpenseForm.css";
import React,{useState} from "react";
function Form() {
  const [enterdate,setDate] = useState("")
  const [entertitle,settitle] = useState("")
  const [enterLocation,setLocation] = useState("")
  const [enterAmount,setAmount] = useState("")
  const changeDate=(event)=>{
    setDate(event.target.value)
}
  const changeTitle=(event)=>{
        settitle(event.target.value)
  }
  const changeLocation=(event)=>{
    setLocation(event.target.value)
}
const changeAmount=(event)=>{
  setAmount(event.target.value)
}

function func(event){
  event.preventDefault();
  const expenseData={
    date:new Date(enterdate),
    title:entertitle,
    location:enterLocation,
    Amount:enterAmount
  }
  console.log(expenseData)
  setDate("")
  settitle("")
  setLocation("")
  setAmount("")
}
  
  return (
    <form className="Form-container" onSubmit={func}>
      <div className="form-date">
        <label htmlFor="date">Date</label>
        <input value={enterdate} onChange={changeDate} type="date" name="date" className="date" />
      </div>
      <div className="form-title">
        <label htmlFor="expensetitle">ExpenseTitle</label>
        <input value={entertitle} onChange={changeTitle} type="text" name="expensetitle" className="expensetitle"/>
      </div>
      <div className="form-loction">
        <label htmlFor="location">Location</label>
        <input value={enterLocation} onChange={changeLocation} type="text" name="location" className="location" />
      </div>
      <div className="form-amount">
        <label htmlFor="amount">Amount</label>
        <input value={enterAmount} onChange={changeAmount} type="number" name="amount" className="amount" />
      </div>
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  );
}

export default Form;
