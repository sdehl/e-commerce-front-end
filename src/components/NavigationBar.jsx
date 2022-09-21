import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { deleteUserData } from "../redux/slices/gemaSlice";

import gemaLogo from "./img/gema-logo.png";
import search from "./svg/magnifying-glass-solid.svg";
import cart from "./svg/cart-shopping-solid.svg";
import profile from "./svg/user-regular.svg";
import rocket from "./svg/rocket-solid.svg";
import admin from "./svg/gear-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/NavigationBarStyles.css";

function NavigationBar() {
  const gema = useSelector((state) => state.gema);
  const [categories, setCategories] = useState("");
  const [elementToSearch, setElementToSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  return (
    categories && (
      <div className="allNavbar">
        <div className="top-banner d-none d-md-flex justify-content-center align-items-center">
          {" "}
          <div>
            <img className="icons mx-2" src={rocket} alt="rocket icon" />
          </div>
          {/* <div>
            <button
              onClick={() => {
                dispatch(deleteUserData());
              }}
            >
              Logout
            </button>
          </div> */}
          <div>
            <span>Envios a Montevideo y al Interior del Uruguay</span>{" "}
          </div>
        </div>
        <div className="row align-items-center my-4  ">
          <div className="col-4 navbarCol4 d-none d-md-flex">
            {location.pathname !== "/search" ? (
              <div>
                <input
                  className="headerSearch"
                  type="text"
                  value={elementToSearch}
                  onChange={(e) => {
                    setElementToSearch(e.target.value);
                  }}
                />{" "}
                <img
                  className="icons mx-2"
                  src={search}
                  alt="search icon"
                  onClick={() => {
                    setElementToSearch("");
                    navigate("/search", {
                      state: {
                        elementToSearch: elementToSearch,
                      },
                    });
                  }}
                />
              </div>
            ) : (
              <div>
                <p
                  className="searchUnderline"
                  onClick={() => {
                    navigate("/search");
                  }}
                >
                  ______________
                </p>
                <img className="icons mx-2" src={search} alt="search icon" />
              </div>
            )}
          </div>
          <div className="col-12 navbarCol12 justify-content-center col-md-4 ">
            <Link to="/">
              <img className="home-logo" src={gemaLogo} alt="gema-logo" />
            </Link>
          </div>
          <div className="col-4 d-none d-md-flex navIcons">
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
                  alt="admin icon"
                  onClick={() => {
                    navigate("/admin");
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center dropdowns-container itemsNavBar">
          <Navbar expand="md">
            <Container fluid>
              <Navbar.Toggle className="border-0 shadow-none " aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-0 my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
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
                      navigate(`/products/${categories[0].name}`);
                    }}
                  >
                    <span className="underline-animation"> {categories[0].name.toUpperCase()}</span>
                  </Nav.Link>
                  <Nav.Link
                    className="mx-3"
                    onClick={() => {
                      navigate(`/products/${categories[1].name}`);
                    }}
                  >
                    <span className="underline-animation">{categories[1].name.toUpperCase()} </span>
                  </Nav.Link>

                  <Nav.Link
                    className="mx-3"
                    onClick={() => {
                      navigate(`/products/${categories[2].name}`);
                    }}
                  >
                    <span className="underline-animation">{categories[2].name.toUpperCase()} </span>
                  </Nav.Link>
                  <Nav.Link
                    className="mx-3 d-md-none"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    <span className=" underline-animation">PERFIL </span>
                  </Nav.Link>
                  <Nav.Link
                    className="mx-3 d-md-none"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    <span className=" underline-animation">CARRITO </span>
                  </Nav.Link>

                  {gema.userData.isAdmin ? (
                    <Nav.Link
                      className="mx-3 d-md-none"
                      onClick={() => {
                        navigate("/admin");
                      }}
                    >
                      <span className=" underline-animation">ADMINISTRADOR </span>
                    </Nav.Link>
                  ) : null}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    )
  );
}

export default NavigationBar;
