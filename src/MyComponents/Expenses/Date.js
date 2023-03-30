import './Date.css'
function Date(props){
    const date=props.date.getDay();
    const month=props.date.toLocaleString('en-IN',{month:'long'});
    const year=props.date.getFullYear();
    return(
        <div className="datecomp">
            <div>{date}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default Date;