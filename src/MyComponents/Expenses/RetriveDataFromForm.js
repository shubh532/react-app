import React from "react";
import Form from "./ExpenseForm";

const FormData=()=>{
    function SaveExpenseData(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       console.log(expenseData)
    }

    return(
        <div>
            <Form onSaveExpenseData={SaveExpenseData}></Form>
        </div>
    )
}
export default FormData;