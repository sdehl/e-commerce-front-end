import React from "react";
import arrowUp from "./svg/circle-arrow-up-solid.svg";
import "./styles/AbsoluteIconsStyles.css";
import { useNavigate } from "react-router-dom";

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
        <h6>AboutThisProyect</h6>
      </div>
      <div className="rightBottom">
        <button
          className="arrowUp-btn"
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img className="arrow-up-icon" src={arrowUp} alt="arrow up icon" />
        </button>
      </div>
    </>
  );
}

export default AbsoluteIcons;
