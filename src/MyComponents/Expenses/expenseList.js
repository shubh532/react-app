import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"
function ExpenseList(props){
  
  if (props.items.length===0){
    return <h2 className="noData_Msg">No Data Found</h2>
  } else if(props.items.length===1){
    return <h4 className="One_Data_Msg">Only One item is Present in List, Please Add More</h4>
  }
  return(<ul className="expense-list">
  {props.items.map((item)=>( 
      <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          location={item.location}
          amount={item.amount}
        ></ExpenseItem>
      )
    )
  }
  </ul>)
}

export default ExpenseList;