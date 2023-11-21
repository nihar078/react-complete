import React from "react";

const ExpenseItem = (props)=>{
    return(
        <div style={{display: "flex" , gap: "10rem", textAlign:"center"}}>
            <h6>Rs. {props.amount}</h6>
            <p>{props.description}</p>
            <h6>{props.category}</h6>
        </div>
    )

}

export default ExpenseItem