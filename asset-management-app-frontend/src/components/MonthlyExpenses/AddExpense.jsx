import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeDataService from "../../services/HomeDataService";

const AddExpense = () => {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [total, setTotal] = useState("");
  const navigate = useNavigate();

  const saveExpense = (e) => {
    e.preventDefault();

    let spending = {
      expense: expense,
      description: description,
      category: category,
      month: month,
      year: year,
      total: total,
    };
    console.log("spend =>" + JSON.stringify(spending));
    HomeDataService.createExpense(spending).then(() => {
      navigate("/finances");
    });
  };

  const cancel = () => {
    setExpense('');
    setCategory('');
    setMonth('');
    setYear('');
    setTotal('');
    navigate("/finances");
  };

  return (
    <div>
      <div className="page-background">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Expense</h3>
              <div className="card-body">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expense"
                    name="expense"
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                  />
                     <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Month"
                    name="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}

                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Total Amount"
                    name="total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                  <button className="btn btn-success" onClick={saveExpense}>
                    Add Expense
                  </button>
                  <button className="btn btn-danger" onClick={cancel}>
                  Cancel
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddExpense;
