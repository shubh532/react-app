import React from "react";
import "./chartBar.css"

function ChartBar(props){
    let barfillHeight="0%"

    if (props.maxValue > 0){
        barfillHeight=Math.round((props.value/props.maxValue)*100)+"%"
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div className="chart-bar-fill" style={{height:barfillHeight}}></div>
            </div>
            <div className="chart-bar-label">{props.label}</div>
        </div>
    )
}
export default ChartBar;