import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Konveksi Inventory</Navbar.Brand>
      <Nav className="ml-auto">
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;
