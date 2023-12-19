const MonthlySpendingTable = () => {
  const handleAddRow = () => {};

  const handleDeleteRow = () => {};

  const handleUpdateRow = () => {};

  const handleArchiveRow = () => {};

  // Function to save changes to a row - implement as needed
  const handleSaveRow = () => {};

  return (
    <div>
      <h1 className="text-center">Monthly Spending</h1>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>User ID</th>
              <th>Month</th>
              <th>Direct Debit</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  onClick={() => handleUpdateRow()}
                  className="btn btn-warning"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteRow()}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleSaveRow()}
                  className="btn btn-success"
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleAddRow} className="btn btn-info btn-small">
          Add Row
        </button>
        <button onClick={handleArchiveRow} className="btn btn-secondary btn-small">
          Archive
        </button>
      </div>
    </div>
  );
};

export default MonthlySpendingTable;
