import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeUserData } from "../redux/slices/gemaSlice";
import Alert from "@mui/material/Alert";
import cart from "./svg/cart-shopping-solid.svg";
import home from "./svg/house-solid.svg";
import "./styles/ProfileStyles.css";

function Profile() {
  const gema = useSelector((state) => state.gema);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmailorUsername, setLoginEmailorUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  console.log(gema);
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

      dispatch(storeUserData(result.data));
      setUserStatus(result.status);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      setUserStatus(error.response.status);
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
      setLoginStatus(response.status);
    } catch (error) {
      console.log(error.response.status);
      setLoginStatus(error.response.status);
    }
  }

  return (
    <>
      {gema.userData.token ? (
        <div className="container profileForm">
          <div className="row editForm">
            <div className="col-12 col-lg-6">
              <form>
                <strong>
                  <h2> EDITAR PERFIL</h2>
                </strong>
                <div className="my-5 ">
                  <label htmlFor="firstname" className="form-label">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    // value={loginEmailorUsername}
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    // onChange={(e) => setLoginEmailorUsername(e.target.value)}
                  />
                </div>
                <div className="my-5 ">
                  <label htmlFor="lastname" className="form-label">
                    Apellido
                  </label>
                  <input
                    required
                    type="text"
                    // value={loginEmailorUsername}
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    // onChange={(e) => setLoginEmailorUsername(e.target.value)}
                  />
                </div>
                <div className="my-5 ">
                  <label htmlFor="username" className="form-label">
                    Nombre de usuario
                  </label>
                  <input
                    required
                    type="text"
                    // value={loginEmailorUsername}
                    className="form-control"
                    name="username"
                    id="username"
                    // onChange={(e) => setLoginEmailorUsername(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    required
                    // value={loginPassword}
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="+598 xx xxx xxx"
                    // onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="adress" className="form-label">
                    Dirección
                  </label>
                  <input
                    required
                    // value={loginPassword}
                    type="text"
                    name="adress"
                    className="form-control"
                    id="adress"
                    // onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <button
                    type="button"
                    className="save-btn "
                    // onClick={() => {
                    //   register();
                    // }}
                  >
                    GUARDAR
                  </button>
                  {userStatus === 201 ? (
                    <Alert severity="warning" icon={false}>
                      Perfil editado correctamente!{" "}
                      <span className="mx-2">
                        <Link className="home-link" to="/">
                          Ir a <img className="home-icon" src={home} alt="" />
                        </Link>
                      </span>
                    </Alert>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // Aqui empieza el login/register
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
                    required
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
                    required
                    value={loginPassword}
                    type="password"
                    name="loginPassword"
                    className="form-control"
                    id="loginPassword"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 ">
                  <div>
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
                  <div className="form-check rememberMe">
                    <label className="form-check-label">
                      {" "}
                      <input type="checkbox" className="form-check-input" />
                      Recordarme
                    </label>{" "}
                  </div>
                </div>
                <div className=" d-flex align-items-center justify-content-between">
                  <div>
                    {loginStatus === 200 ? (
                      <Alert icon={false} severity="success">
                        Has accedido a tu cuenta correctamente!
                      </Alert>
                    ) : null}
                    {loginStatus === 400 ? (
                      <Alert severity="error">Correo electrónico o contraseña invalidos!</Alert>
                    ) : null}
                    <a className="forgetPassword" href="#">
                      ¿Olvidaste la contraseña?
                    </a>
                  </div>
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
                      required
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
                      required
                      value={password}
                      type="password"
                      name="registerPassword"
                      className="form-control"
                      id="registerPassword"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="register-btn "
                      onClick={() => {
                        register();
                      }}
                    >
                      REGISTRARME
                    </button>
                    {userStatus === 201 ? (
                      <Alert severity="warning" icon={false}>
                        Usuario creado correctamente!{" "}
                        <span className="mx-2">
                          <Link className="cart-link" to="/cart">
                            Ir a <img className="cart-icon" src={cart} alt="" />
                          </Link>
                        </span>
                      </Alert>
                    ) : null}
                    {userStatus === 409 ? (
                      <Alert severity="error">Correo electrónico ya existe!</Alert>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// import * as React from 'react';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';

// export default function BasicAlerts() {
//   return (
//     <Stack sx={{ width: '100%' }} spacing={2}>
//       <Alert severity="error">This is an error alert — check it out!</Alert>
//       <Alert severity="warning">This is a warning alert — check it out!</Alert>
//       <Alert severity="info">This is an info alert — check it out!</Alert>
//       <Alert severity="success">This is a success alert — check it out!</Alert>
//     </Stack>
//   );
// }
export default Profile;
