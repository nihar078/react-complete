import React, { Fragment } from "react";

import MedicineAddForm from "./MedicineAddForm";
import MedicineList from "./MedicineList";


const Medicine = () =>{

    return(
        <Fragment>
            <MedicineAddForm />
            <MedicineList />
        </Fragment>
    )
}

export default Medicine