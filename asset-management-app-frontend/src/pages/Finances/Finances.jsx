import MonthlySpendingTable from "../../components/MonthlyFinances/MonthlySpendingTable"  
import MonthlyLoanTable from "../../components/MonthlyFinances/MonthlyLoanTable"
import MonthlySavingsTable from "../../components/MonthlyFinances/MonthlySavingsTable"
function Finances() {
  return (
    <div className="page-background">
    <h1>Financial Tracker Data Input</h1>
    <MonthlySpendingTable />
    <hr/> 
    <MonthlyLoanTable />
    <hr/>
    <MonthlySavingsTable />
    </div>
  )
}

export default Finances