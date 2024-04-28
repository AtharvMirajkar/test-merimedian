import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const [selectedProduct, setSelectedProduct] = useState(
    localStorage.getItem("selectedProduct") || null
  ); // Add state for selected product

  const toggle = () => setIsOpen(!isOpen);

  // Function to handle navigation away from the "Products" page
  const handleNavigation = () => {
    setIsOpen(false); // Close the navbar
    setSelectedProduct(null);
    localStorage.removeItem("selectedProduct");
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsOpen(false); // Close the navbar
    localStorage.setItem("selectedProduct", product);
  };

  const location = useLocation();
  // Check if the current route is the products route
  const isProductsRoute = location.pathname.startsWith("/Products");

  return (
    <div>
      <Navbar
        className="fixed-top bg-light max-navbar-height"
        expand={"md"}
        {...args}
      >
        <NavbarBrand>
          <Link to="/" onClick={handleNavigation}>
            <img src={logo} alt="Logo" className="img-fluid navbar-logo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto p-3 mynav navbar-scroll" navbar>
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
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Operations/Exports"
                    onClick={handleNavigation}
                  >
                    Exports
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
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
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/Suppositories"
                    onClick={handleNavigation}
                  >
                    Suppositories
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/QualityFocus"
                    onClick={handleNavigation}
                  >
                    Quality Focus
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/FormulationDevelopment"
                    onClick={handleNavigation}
                  >
                    Formulation & Development
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    className="dropdown-item"
                    to="/Manufacturing/Accreditations"
                    onClick={handleNavigation}
                  >
                    Accreditations
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
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
                <div class="d-flex flex-md-row flex-column">
                  <div style={{ marginRight: "20px" }}>
                    <DropdownItem header>Type 1</DropdownItem>
                    <DropdownItem divider />
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=MAZORB D3",
                      }}
                      onClick={() => handleProductSelect("MAZORB D3")}
                    >
                      MAZORB D3
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=FB-Rich",
                      }}
                      onClick={() => handleProductSelect("FB-Rich")}
                    >
                      FB-Rich
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=Cis Q Forte",
                      }}
                      onClick={() => handleProductSelect("Cis Q Forte")}
                    >
                      Cis Q Forte
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=UPCOOL-20",
                      }}
                      onClick={() => handleProductSelect("UPCOOL-20")}
                    >
                      UPCOOL-20
                    </Link>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <DropdownItem header>Type 2</DropdownItem>
                    <DropdownItem divider />
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=UPTRACE",
                      }}
                      onClick={() => handleProductSelect("UPTRACE")}
                    >
                      UPTRACE
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=Ne-norm",
                      }}
                      onClick={() => handleProductSelect("Ne-norm")}
                    >
                      Ne-norm
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=Pilenorm",
                      }}
                      onClick={() => handleProductSelect("Pilenorm")}
                    >
                      Pilenorm
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/Products",
                        search: "?product=UPTACE-M Injection",
                      }}
                      onClick={() => handleProductSelect("UPTACE-M Injection")}
                    >
                      UPTACE-M Injectio
                    </Link>
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
                to="/general-enquiry"
                onClick={handleNavigation}
              >
                Enquiry
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
      {/* Conditionally render the Products component based on the current route */}
      {isProductsRoute && <Products selectedProduct={selectedProduct} />}
    </div>
  );
}

export default Header;
