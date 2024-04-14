import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../assets/Merimedian.png";

import "../Styles/Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Products from "../Pages/Products";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null); // Add state for selected product

  const toggle = () => setIsOpen(!isOpen);

  // Function to handle navigation away from the "Products" page
  const handleNavigation = () => {
    setSelectedProduct(null);
  };

  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    return <Navigate to="/products" />;
  };

  return (
    <div>
      <Navbar
        className="fixed-top max-navbar-height bg-white "
        expand={"md"}
        {...args}
      >
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className="img-fluid navbar-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto p-3 mynav" navbar>
            <NavItem>
              <Link className="nav-link" to="/" onClick={handleNavigation}>
                Home
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="hover-dropdown">
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/About/Overview"
                    onClick={handleNavigation}
                  >
                    Overview
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/About/History"
                    onClick={handleNavigation}
                  >
                    History
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/About/Founder"
                    onClick={handleNavigation}
                  >
                    Founder
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/About/Mission"
                    onClick={handleNavigation}
                  >
                    Mission
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="hover-dropdown">
              <DropdownToggle nav caret>
                Operations
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Operations/MarketingInIndia"
                    onClick={handleNavigation}
                  >
                    Marketing in India
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Operations/Exports"
                    onClick={handleNavigation}
                  >
                    Exports
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Operations/ContractManufacturing"
                    onClick={handleNavigation}
                  >
                    Contract Manufacturing
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="hover-dropdown">
              <DropdownToggle nav caret>
                Manufacturing Facility
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/Overview"
                    onClick={handleNavigation}
                  >
                    Overview
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/Suppositories"
                    onClick={handleNavigation}
                  >
                    Suppositories
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/QualityFocus"
                    onClick={handleNavigation}
                  >
                    Quality Focus
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/FormulationDevelopment"
                    onClick={handleNavigation}
                  >
                    Formulation & Development
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/Accreditations"
                    onClick={handleNavigation}
                  >
                    Accreditations
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/Clients"
                    onClick={handleNavigation}
                  >
                    Clients
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="hover-dropdown">
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginRight: "20px" }}>
                    <DropdownItem header>Type 1</DropdownItem>
                    <DropdownItem divider />
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/products",
                        search: "?product=ProductA",
                      }}
                      onClick={() => handleProductSelect("Product A")}
                    >
                      Product A
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/products"
                      onClick={() => handleProductSelect("Product B")}
                    >
                      Product B
                    </Link>
                    <Link
                      className="dropdown-item"
                      onClick={() => handleProductSelect("Type 1")}
                    >
                      Product C
                    </Link>
                    <Link
                      className="dropdown-item"
                      onClick={() => handleProductSelect("Type 1")}
                    >
                      Product D
                    </Link>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <DropdownItem header>Type 2</DropdownItem>
                    <DropdownItem divider />
                    <Link className="dropdown-item">Product E</Link>
                    <Link className="dropdown-item">Product F</Link>
                    <Link className="dropdown-item">Product G</Link>
                    <Link className="dropdown-item">Product H</Link>
                  </div>
                  <div>
                    <DropdownItem header>Type 3</DropdownItem>
                    <DropdownItem divider />
                    <Link className="dropdown-item">Product I</Link>
                    <Link className="dropdown-item">Product J</Link>
                    <Link className="dropdown-item">Product K</Link>
                    <Link className="dropdown-item">Product L</Link>
                  </div>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link
                className="nav-link"
                to="/Careers"
                onClick={handleNavigation}
              >
                Careers
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                to="/Contact"
                onClick={handleNavigation}
              >
                Contact us
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Products selectedProduct={selectedProduct} />{" "}
      {/* Pass selectedProduct to Products component */}
    </div>
  );
}

export default Header;
