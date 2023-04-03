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
        <div>
            {!isEditing&&<button onClick={addBtnHandler}>Add New Expense</button>}
            {isEditing&&<Form onSaveExpenseData={SaveExpenseData} Cancel={stopEditHandler}></Form>}
        </div>
    )
}
export default FormData;