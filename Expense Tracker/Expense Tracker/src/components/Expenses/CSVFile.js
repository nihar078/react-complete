import React from "react";
import { useSelector } from "react-redux";


const CSVFile = ()=>{

   const expenses =  useSelector((state) => state.expense.expenses)

   const handleDownload = () => {
    const csvData = generateCsvData(expenses);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();
    // document.body.appendChild(a);
    // document.body.removeChild(a);

  };

   const generateCsvData = (expenses) => {
    const header = " Category , Amount , Description , Date \n";
    const rows = expenses.map(
      (expense) =>
        `${ expense.category },${ expense.amount },${ expense.description },${ expense.date }\n`
    );
    return header + rows.join("");
  };

    return(
        <div>
            <button style={{margin: "5px", border: "none", borderRadius:"4px"}} onClick={handleDownload}>Download Expenses</button>
        </div>
    )
}

export default CSVFile