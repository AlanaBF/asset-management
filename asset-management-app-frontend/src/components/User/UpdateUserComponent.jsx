import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const UpdateUserComponent = () => {
  const { userId } = useParams(); // Get the userId from the URL
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch employee data only if Id is available from the URL
    if (userId) {
      UserService.getUserById(userId)
        .then((res) => {
          const user = res.data;
          // Update the state with the fetched data
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setUsername(user.username);
          setEmail(user.email);
        })
        .catch((error) => {
          // Handle error if needed
          console.error(error);
        });
    }
  }, [userId]); // Depend on Id to trigger the effect when it changes (e.g., when the URL changes)

  const updateUser = (e) => {
    e.preventDefault();
    const updatedUser = { userId, firstName, lastName, username, email }; // Include the user ID

    UserService.updateUser(updatedUser, userId)
      .then(() => {
        navigate("/users");
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
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
      <HeaderComponent />
      <div className="page-background">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update User</h3>
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
                <button className="btn btn-success" onClick={updateUser}>
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
      <FooterComponent />
    </div>
  );
};

export default UpdateUserComponent;
