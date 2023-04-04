import React, { useState } from "react";
import Form from "./ExpenseForm";

const FormData=(props)=>{
    const [isEditing,setIsediting]=useState(false)
    function SaveExpenseData(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       props.takeData(expenseData)
        setIsediting(false)
    }

    const addBtnHandler=()=>{
        setIsediting(true)
    }
    const stopEditHandler=()=>{
        setIsediting(false)
    }

    return(
        <div className="f-container">
            {!isEditing&&<div className="add-btn-contain"><button className="add-new-exp" onClick={addBtnHandler}>Add New Expense</button></div>}
            {isEditing&&<Form onSaveExpenseData={SaveExpenseData} Cancel={stopEditHandler}></Form>}
        </div>
    )
}
export default FormData;