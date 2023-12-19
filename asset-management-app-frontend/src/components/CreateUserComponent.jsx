import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

const CreateUserComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveUser = (e) => {
    e.preventDefault();
    // Here, you can save the employee data or perform other actions
    let user = { firstName: firstName, lastName: lastName, username: username, email: email };
    console.log("user =>" + JSON.stringify(user));
    UserService.createUsers(user).then(() => {
      navigate("/users");
    });
  };

  const cancel = () => {
    // Here, you can reset the form or perform other cancel actions
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    navigate("/users");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add User</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    placeholder="Username"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="btn btn-success" onClick={saveUser}>
                  Save
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
  );
};

export default CreateUserComponent;
