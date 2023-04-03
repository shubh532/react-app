import React from "react";
import "./expenseFilter.css"
function ExpenseFilter(props){
    const DropDownChnge=(event)=>{
        props.onChangeFilter(event.target.value)
    }

    return(
        <div>
            <div className="filter-container">
                <label className="label">Filter By Year</label>
                <select className="select" value={props.selected} onChange={DropDownChnge}> 
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;