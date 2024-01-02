import Logo from "../assets/favicon/apple-touch-icon.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Link to="/home" className="navbar-brand">
        <img
          src={Logo}
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top"
        />
        Asset Management App
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {isAuthenticated && ( // Render the "Home" link if authenticated
            <>
              <Nav.Link as={Link} to="/home" className="nav-link" aria-current="page">
                Home
              </Nav.Link>
              <NavDropdown title="Finances" id="finances-dropdown">
                <LinkContainer to="/finances">
                  <NavDropdown.Item>Finances</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/add-expense">
                  <NavDropdown.Item>Add Expense</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Admin" id="admin-dropdown">
                <LinkContainer to="/users">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/add-user">
                  <NavDropdown.Item>Add User</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </>
          )}
        </Nav>
        {isAuthenticated && <LogoutButton />}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
