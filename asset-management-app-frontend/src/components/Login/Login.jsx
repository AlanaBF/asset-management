import { useState } from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import Logo from "../../assets/favicon/apple-touch-icon.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate("/home");
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
