import Logo from "../assets/favicon/apple-touch-icon.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

function HeaderComponent() {
 
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/home">
        <img
          src={Logo}
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top"
        />
        {""} 
      </Navbar.Brand> <p className="header-title">Asset Management App</p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Finances" id="collasible-nav-dropdown">
            <LinkContainer to="/finances">
              <NavDropdown.Item>Finances</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/add-expense">
              <NavDropdown.Item>Add Expense</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>



          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <LinkContainer to="/users">
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/add-user">
              <NavDropdown.Item>Add User</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderComponent;
