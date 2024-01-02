import { useState, useEffect } from "react";
import HomeDataService from "../../services/HomeDataService.js"; // Import the service
import { useNavigate } from "react-router-dom";

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your API using EmployeeService.getEmployees()
    HomeDataService.getAllExpenses()
      .then((res) => {
        setExpenses(res.data); // Update state with the fetched data
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user
        console.error("Error fetching expenses:", error);
      });
  }, []); // The empty dependency array means this effect runs once on component mount

  const addExpense = () => {
    navigate("/add-expense");
  };

  const deleteExpense = (id) => {
    HomeDataService.deleteExpense(id)
      .then(() => {
        // Remove the deleted user from the list or update the user list
        setExpenses(expenses.filter((expense) => expense.id !== id));
        navigate("/finances");
      })
      .catch((error) => {
        console.error("Error deleting expense:", error);
      });
  };
  const updateExpense = (id) => {
    console.log("id:", id); // Log the userId before navigating
    navigate(`/update-expense/${id}`);
  };

  return (
    <div>
      <h1 className="text-center">Monthly Expenses</h1>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Id</th>
              <th>Category</th>
              <th>Month</th>
              <th>Year</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.expense}</td>
                <td>{expense.description}</td>
                <td>{expense.id}</td>
                <td>{expense.category}</td>
                <td>{expense.month}</td>
                <td>{expense.year}</td>
                <td>{expense.total}</td>
                <td>
                  <button
                    onClick={() => updateExpense(expense.id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addExpense} className="btn btn-info btn-small">
          Add Row
        </button>
      </div>
    </div>
  );
};

export default ExpenseTable;
