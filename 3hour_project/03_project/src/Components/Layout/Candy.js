import React, { Fragment } from "react";

import CandyAddForm from "./CandyAddForm";
import CandyList from "./CandyList";


const Candy = () =>{

    return(
        <Fragment>
            <CandyAddForm />
            <CandyList />
        </Fragment>
    )
}

export default Candy