import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import search from "./svg/magnifying-glass-solid.svg";
import bag from "./svg/bag-shopping-solid.svg";
import profile from "./svg/user-regular.svg";
import rocket from "./svg/rocket-solid.svg";
import { useSelector } from "react-redux";

import "./styles/NavigationBarStyles.css";

function NavigationBar() {
  const gema = useSelector((state) => state.gema);
  const navigate = useNavigate();
  return (
    <>
      <div className="top-banner d-none d-md-flex justify-content-center align-items-center">
        {" "}
        <div>
          <img className="icons mx-2" src={rocket} alt="rocket icon" />
        </div>
        <div>
          <span>Envios a Montevideo y al Interior del Uruguay</span>
        </div>
      </div>
      <div className=" d-flex justify-content-between align-items-center mx-4">
        <div className="d-none d-md-flex">
          <span className="falseInput">____________</span>
          <img className="icons" src={search} alt="search icon" />
        </div>
        <div>
          <Link to="/">
            <img
              className="home-logo"
              src="https://www.gemainteriores.com/wp-content/uploads/2021/05/Logo-H4-1-scaled.jpg"
              alt="gema-logo"
            />
          </Link>
        </div>
        <div className="d-none d-md-flex  ">
          <img
            className="icons link-icons"
            src={profile}
            alt="profile icon"
            onClick={() => {
              navigate("/profile");
            }}
          />
          {/* <Nav.Link
            className="icons "
            onClick={() => {
              navigate("/cart");
            }}
          > */}
          <img
            className="icons link-icons mx-2"
            src={bag}
            alt="bag icon"
            onClick={() => {
              navigate("/cart");
            }}
          />
          {/* </Nav.Link> */}

          <h6 className="icons d-inline-block light">{gema.cantProductsCart}</h6>
        </div>
      </div>
      <div className=" d-flex justify-content-center dropdowns-container">
        <Navbar expand="md">
          <Container fluid>
            <Navbar.Toggle
              className="border-0 shadow-none "
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  SHOP ALL
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products/Tiradores");
                  }}
                >
                  TIRADORES
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products/Herrajes");
                  }}
                >
                  HERRAJES
                </Nav.Link>

                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products/Grifería");
                  }}
                >
                  GRIFERÍA
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigationBar;
