import MonthlyLoanTable from "../../components/MonthlyLoans/MonthlyLoanTable";
import ExpenseTable from "../../components/MonthlyExpenses/ExpenseTable";
import MonthlySavingsTable from "../../components/MonthlyLoans/MonthlySavingsTable";
function Finances() {
  return (
    <div>
      <div className="page-background">
        <h1>Financial Tracker Data Input</h1>
        <ExpenseTable />
        <hr />
        <MonthlyLoanTable />
        <hr />
        <MonthlySavingsTable />
      </div>
    </div>
  );
}

export default Finances;
