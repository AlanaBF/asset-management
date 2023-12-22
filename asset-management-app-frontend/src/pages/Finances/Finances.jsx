import MonthlyLoanTable from "../../components/MonthlyFinances/MonthlyLoanTable";
import ExpenseTable from "../../components/MonthlyExpenses/ExpenseTable";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

function Finances() {
  return (
    <div>
      <HeaderComponent />
      <div className="page-background">
        <h1>Financial Tracker Data Input</h1>
        <ExpenseTable />
        <hr />
        <MonthlyLoanTable />
        <hr />
      </div>
      <FooterComponent isLoggedIn={true} />
    </div>
  );
}

export default Finances;
