import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      id="sidebar-wrapper"
      style={{ width: "250px", background: "#343a40", height: "100vh" }}
    >
      <div className="sidebar-heading text-white p-3">Konveksi Inventory</div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <NavItem>
          <NavLink as={Link} to="/" className="text-white p-2">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/bahan-mentah" className="text-white p-2">
            Bahan Mentah
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/bahan-jadi" className="text-white p-2">
            Bahan Jadi
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
