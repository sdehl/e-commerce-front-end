import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import search from "./svg/magnifying-glass-solid.svg";
// import bag from "./svg/bag-shopping-solid.svg";
import cart from "./svg/cart-shopping-solid.svg";
import profile from "./svg/user-regular.svg";
import rocket from "./svg/rocket-solid.svg";
import admin from "./svg/gear-solid.svg";
import { useDispatch, useSelector } from "react-redux";

import "./styles/NavigationBarStyles.css";
import { deleteUserData } from "../redux/slices/gemaSlice";

function NavigationBar() {
  const gema = useSelector((state) => state.gema);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="top-banner d-none d-md-flex justify-content-center align-items-center">
        {" "}
        <div>
          <img className="icons mx-2" src={rocket} alt="rocket icon" />
        </div>
        <div>
          {/* <button
            onClick={() => {
              dispatch(deleteUserData());
            }}
          >
            Logout
          </button> */}
          <span>Envios a Montevideo y al Interior del Uruguay</span>{" "}
        </div>
      </div>
      <div className=" d-flex justify-content-between align-items-center mx-5">
        <div className="d-none d-md-flex align-items-center">
          <input
            className="headerSearch"
            type="text"
            onClick={() => {
              navigate("/search");
            }}
          />{" "}
          <img className="icons mx-2" src={search} alt="search icon" />
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
        <div className="d-none d-md-flex ">
          <div>
            <img
              className="icons link-icons"
              src={profile}
              alt="profile icon"
              onClick={() => {
                navigate("/profile");
              }}
            />
          </div>

          <div className="cart">
            <img
              className="icons link-icons mx-1"
              src={cart}
              alt="cart icon"
              onClick={() => {
                navigate("/cart");
              }}
            />
            <h6 className="icons d-inline-block light">{gema.cantProductsCart}</h6>{" "}
          </div>

          <div>
            {gema.userData.isAdmin ? (
              <img
                className="icons link-icons"
                src={admin}
                alt="profile icon"
                onClick={() => {
                  navigate("/admin");
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center dropdowns-container">
        <Navbar expand="md">
          <Container fluid>
            <Navbar.Toggle className="border-0 shadow-none " aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link
                  className="mx-3 "
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  <span className="underline-animation">SHOP ALL</span>
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products/Tiradores");
                  }}
                >
                  <span className="underline-animation"> TIRADORES</span>
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products/Herrajes");
                  }}
                >
                  <span className="underline-animation">HERRAJES </span>
                </Nav.Link>

                <Nav.Link
                  className="mx-3"
                  onClick={() => {
                    navigate("/products/Grifería");
                  }}
                >
                  <span className="underline-animation">GRIFERÍA </span>
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
