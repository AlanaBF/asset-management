import { useState } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import Logo from "../../assets/favicon/apple-touch-icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   navigate("/home");
  // };


  const handleLogin = async () => {
    try {
        const response = await axios.get('http://yourbackend.com/api/login', {
            auth: {
                username,
                password,
            },
        });

        // Handle successful login, e.g., store token or redirect
        console.log('Login successful:', response.data);
    } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
    }
};

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/Login">
          <img
            src={Logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          {""}
        </Navbar.Brand>
        <p className="header-title">Asset Management Application</p>
      </Navbar>
      <div className="page-background">
        <h1>Login Page</h1>
        <br></br>
        <p>Track your monthly spending and savings.</p>
        <br></br>
        <p>Enter your email and password to login</p>
        <br></br>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
