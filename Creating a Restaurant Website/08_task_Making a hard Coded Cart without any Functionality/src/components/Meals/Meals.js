import { Fragment } from "react"

import RestaurantsSummary from "./RestaurantsSummary"
import AvailabelMeals from "./AvailabelMeals"
const Meals = () => {
    return (
        <Fragment>
            <RestaurantsSummary />
            <AvailabelMeals />
        </Fragment>
    )
}

export default Meals