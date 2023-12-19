import { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const ListUserComponent = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your API using EmployeeService.getEmployees()
    UserService.getUsers()
      .then((res) => {
        setUsers(res.data); // Update state with the fetched data
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message to the user
        console.error("Error fetching users:", error);
      });
  }, []); // The empty dependency array means this effect runs once on component mount

  const addUser = () => {
    navigate("/add-user");
  };

  const updateUser = (userId) => {
    console.log("UserId:", userId); // Log the userId before navigating
    navigate(`/update-user/${userId}`);
  };

  const deleteUser = (userId) => {
    UserService.deleteUser(userId)
      .then(() => {
        // Remove the deleted user from the list or update the user list
        setUsers(users.filter((user) => user.id !== userId));
        navigate("/users");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="page-background">
      <h2 className="text-center">Users List</h2>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => updateUser(user.userId)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteUser(user.userId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info btn-small" onClick={addUser}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default ListUserComponent;
