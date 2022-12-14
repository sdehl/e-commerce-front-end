import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { deleteUserData } from "../redux/slices/gemaSlice";

import gemaLogo from "./img/gema-logo.png";
import search from "./svg/magnifying-glass-solid.svg";
import cart from "./svg/cart-shopping-solid.svg";
import profile from "./svg/user-regular.svg";
import rocket from "./svg/rocket-solid.svg";
import admin from "./svg/gear-solid.svg";
import "./styles/NavigationBarStyles.css";

function NavigationBar() {
  const gema = useSelector((state) => state.gema);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState("");
  const [elementToSearch, setElementToSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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
      <>
        <div className="top-banner d-none d-md-flex justify-content-center align-items-center">
          {" "}
          <div>
            <img
              className="icons mx-2"
              src={rocket}
              alt="rocket icon"
              onClick={() => {
                dispatch(deleteUserData());
              }}
            />
          </div>
          <div>
            <span>Envios a Montevideo y al Interior del Uruguay</span>{" "}
          </div>
        </div>
        <div className="row align-items-center my-2  "></div>
        <div className="  dropdowns-container itemsNavBar">
          <Navbar expand="md">
            <Container fluid className="flex-md-wrap w-100">
              <Navbar.Brand className=" text-md-center customNavbarBrand d-md-flex justify-content-between">
                <div className="col-4  d-none d-md-flex">
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
                          setElementToSearch(" ");
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

                <div className="col-4">
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
              </Navbar.Brand>
              <Navbar.Toggle className="border-0 shadow-none " aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="a justify-content-md-center" id="basic-navbar-nav">
                <Nav className=" my-2 my-lg-0">
                  <Nav.Link
                    className="mx-3 "
                    onClick={() => {
                      navigate("/products");
                    }}
                  >
                    <span className="underline-animation">SHOP ALL</span>
                  </Nav.Link>
                  <Nav.Link
                    className="mx-3 d-md-none"
                    onClick={() => {
                      navigate("/search");
                    }}
                  >
                    <span className=" underline-animation">BUSCAR </span>
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
        <div className="allNavbar"></div>
      </>
    )
  );
}

export default NavigationBar;
