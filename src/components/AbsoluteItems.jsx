import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ArrowUp } from "./svg/circle-arrow-up-solid.svg";

import "./styles/AbsoluteItemsStyles.css";

function AbsoluteIcons() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="about-this-proyect"
        onClick={() => {
          navigate("/about");
        }}
      >
        <h6>Sobre este proyecto</h6>
      </div>
      <div>
        <ScrollToTop smooth top={200} component={<ArrowUp />} />
      </div>
    </>
  );
}

export default AbsoluteIcons;
