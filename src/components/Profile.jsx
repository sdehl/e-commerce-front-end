import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeUserData } from "../redux/slices/gemaSlice";
import "./styles/ProfileStyles.css";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmailorUsername, setLoginEmailorUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function register() {
    try {
      const result = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/register`,
        headers: { "Content-Type": "application/json" },
        data: {
          email: email,
          password: password,
        },
      });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  async function login() {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/login`,
        headers: { "Content-Type": "application/json" },
        data: {
          emailorUsername: loginEmailorUsername,
          password: loginPassword,
        },
      });
      dispatch(storeUserData(response.data));
      navigate(-1);
      setLoginEmailorUsername("");
      setLoginPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container profileForm">
      <div className="row signInForm">
        <div className="col-12 col-lg-6">
          <form>
            <strong>
              <h2> INICIAR SESIÓN</h2>
            </strong>
            <div className="my-5 ">
              <label htmlFor="emailorUsername" className="form-label">
                Nombre de usuario o correo electrónico <span className="obligatory">*</span>
              </label>
              <input
                type="text"
                value={loginEmailorUsername}
                className="form-control"
                name="emailorUsername"
                id="emailorUsername"
                onChange={(e) => setLoginEmailorUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="loginPassword" className="form-label">
                Contraseña <span className="obligatory">*</span>
              </label>
              <input
                value={loginPassword}
                type="password"
                name="loginPassword"
                className="form-control"
                id="loginPassword"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check rememberMe">
              <label className="form-check-label">
                {" "}
                <input type="checkbox" className="form-check-input" />
                Recordarme
              </label>{" "}
              <button
                type="button"
                className="login-btn"
                onClick={() => {
                  login();
                }}
              >
                INICIAR SESIÓN
              </button>
            </div>
            <div>
              <a className="forgetPassword" href="#">
                ¿Olvidaste la contraseña?
              </a>
            </div>
          </form>

          <div className="registerForm">
            <form>
              <strong>
                <h2> REGISTRARME</h2>
              </strong>
              <div className="my-5 ">
                <label htmlFor="email" className="form-label">
                  Correo electrónico <span className="obligatory">*</span>
                </label>
                <input
                  value={email}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="registerPassword" className="form-label">
                  Contraseña <span className="obligatory">*</span>
                </label>
                <input
                  value={password}
                  type="password"
                  name="registerPassword"
                  className="form-control"
                  id="registerPassword"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="login-btn"
                onClick={() => {
                  register();
                }}
              >
                REGISTRARME
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
