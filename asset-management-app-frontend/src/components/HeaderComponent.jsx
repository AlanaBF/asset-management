import Logo from "../assets/favicon/apple-touch-icon.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function HeaderComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/Home">
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
          <LinkContainer to="/finances">
            <Nav.Link>Finances</Nav.Link>
          </LinkContainer>
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
