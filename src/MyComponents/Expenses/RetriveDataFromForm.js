import React from "react";
import Form from "./ExpenseForm";

const FormData=(props)=>{
    function SaveExpenseData(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       props.takeData(expenseData)
    }

    return(
        <div>
            <Form onSaveExpenseData={SaveExpenseData}></Form>
        </div>
    )
}
export default FormData;