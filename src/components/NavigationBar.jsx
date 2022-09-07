import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import search from "./svg/magnifying-glass-solid.svg";
import bag from "./svg/bag-shopping-solid.svg";
import profile from "./svg/user-regular.svg";
import rocket from "./svg/rocket-solid.svg";
import gemaLogo from "./img/gema-logo.png";

import "./styles/NavigationBarStyles.css";

function NavigationBar() {
  return (
    <>
      <div className="top-banner d-flex justify-content-center align-items-center">
        {" "}
        <div>
          <img className="icons mx-2" src={rocket} alt="rocket icon" />
        </div>
        <div>
          <span>Envios a Montevideo y al Interior del Uruguay</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-5">
        <div>
          <img className="icons" src={search} alt="search icon" />
        </div>
        <div>
          <img
            className="home-logo"
            src="https://www.gemainteriores.com/wp-content/uploads/2021/05/Logo-H4-1-scaled.jpg"
            alt="gema-logo"
          />
        </div>
        <div>
          <img className="icons " src={profile} alt="profile icon" />
          <img className="icons mx-2" src={bag} alt="bag icon" />
        </div>
      </div>
      <div className="d-flex justify-content-center dropdowns-container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="mx-3" href="#action1">
                  SHOP ALL
                </Nav.Link>

                <NavDropdown
                  className="mx-3"
                  title="TIRADORES"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="dropDownStyle" href="#action1">
                    Pomo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Manija</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="mx-3"
                  title="HERRAJES"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action1">
                    Pestillos/Manijones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Perchas</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Accesorios de Baño
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="mx-3"
                  title="GRIFERÍA"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action1">Lavatorio</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Cocina</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Ducha</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Desagües, Válvulas y Sifones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Piletas y Bidet
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigationBar;
