import React from "react";
import fb from "./svg/facebook-f.svg";
import ig from "./svg/instagram.svg";
import search from "./svg/magnifying-glass-solid.svg";
import pinterest from "./svg/pinterest-p.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./styles/FooterStyles.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footerComponent  mt-5">
      <div className="container my-1">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div>
              <input
                className="footerSearch"
                type="text"
                onClick={() => {
                  navigate("/search");
                }}
              />{" "}
              <img className="icons" src={search} alt="search icon" />
            </div>

            <div className="dividerLine">____</div>
            <div className="d-flex justify-content-center">
              <Link to="/">
                <img
                  className="gemaLogoFooter"
                  src="https://www.gemainteriores.com/wp-content/uploads/2021/05/GEMA-LOGO-PaginaWeb-07-1-340x350.png"
                  alt="gema logo footer"
                />
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <ul>
              <h5>CONTACTO</h5>
              <li>info@ecommercegema.com.uy</li>
              <li>Montevideo, Uruguay</li>
            </ul>
            <div className="sn-icons">
              <a href="https://www.facebook.com/gemainteriores/?_rdc=4&_rdr" target="_blank">
                <img className="icons " src={fb} alt="facebook icon" />
              </a>

              <a href="https://www.instagram.com/gemainteriores/" target="_blank">
                <img className="icons " src={ig} alt="instagram icon" />
              </a>

              <a href="https://www.pinterest.com/pilartorrendell3/_saved/" target="_blank">
                <img className="icons " src={pinterest} alt="pinterest icon" />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <ul>
              <h5>NOSOTROS</h5>
              <li>
                <Link className="aboutUs" to="/about">
                  Quiénes Somos
                </Link>
              </li>
              <li>Contacto</li>
            </ul>
            <div className="preciosIVA">Precios con IVA incluido</div>
          </div>
          <div className="col-3">
            <ul>
              <h5>AYUDA</h5>
              <li>Envíos</li>
              <li>Políticas</li>
              <li>Como Comprar</li>
              <li>Mantenimiento y Cuidados</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-banner d-flex justify-content-between align-items-center px-5">
        <div>
          <h6 className="copyright"> © 2022 Derechos Reservados</h6>{" "}
        </div>
        <div>
          <img
            src="https://www.gemainteriores.com/wp-content/uploads/2021/04/mercado.png"
            alt="MercadoPago Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
