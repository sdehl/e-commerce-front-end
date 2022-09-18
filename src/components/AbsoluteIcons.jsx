import React, { useEffect, useState } from "react";
import arrowUp from "./svg/circle-arrow-up-solid.svg";
import { useNavigate } from "react-router-dom";

import "./styles/AbsoluteIconsStyles.css";

function AbsoluteIcons() {
  const navigate = useNavigate();
  //   const [scrolled, setScrolled] = useState(false);

  //   console.log(scrolled);

  //   useEffect(() => {
  //     if (window.scrollY > 100) {
  //       setScrolled(true);
  //     }
  //   }, []);

  return (
    <>
      <div
        className="about-this-proyect"
        onClick={() => {
          navigate("/about");
        }}
      >
        <h6>AboutThisProyect</h6>
      </div>
      <div className="rightBottom">
        <button
          className="arrowUp-btn"
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          //   style={{ display: scrolled ? "block" : "none" }}
        >
          <img className="arrow-up-icon" src={arrowUp} alt="arrow up icon" />
        </button>
      </div>
    </>
  );
}

export default AbsoluteIcons;
