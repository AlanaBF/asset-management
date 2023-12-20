import MonthlySpendingTable from "../../components/MonthlyFinances/MonthlySpendingTable";
import MonthlyLoanTable from "../../components/MonthlyFinances/MonthlyLoanTable";
import MonthlySavingsTable from "../../components/MonthlyFinances/MonthlySavingsTable";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

function Finances() {
  return (
    <div>
      <HeaderComponent />
      <div className="page-background">
        <h1>Financial Tracker Data Input</h1>
        <MonthlySpendingTable />
        <hr />
        <MonthlyLoanTable />
        <hr />
        <MonthlySavingsTable />
      </div>
      <FooterComponent />
    </div>
  );
}

export default Finances;
