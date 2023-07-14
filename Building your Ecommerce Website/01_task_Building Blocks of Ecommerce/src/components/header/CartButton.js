import React from "react";
import { Button } from "react-bootstrap";
import './CartButton.css'


const CartButton = () =>{
    return(
        <div>
            <Button variant="outline-info" className="button" style={{fontFamily: "serif", fontSize: "18px"}}>cart</Button>
            <h3 className="badge badge-wrap" style={{color: "lightblue",position: "absolute" }}>0</h3>
        </div>
    )
}

export default CartButton