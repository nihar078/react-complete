function ExpenseDeatails(props){
    const title = props.title
    const amount = props.amount
    const locationOFExpenditure = props.locationOFExpenditure

    return(
        <div>
            <h2>{title}</h2>
            <div>{locationOFExpenditure}</div>
            <div>{amount}</div>
        </div>
    )
}
export default ExpenseDeatails