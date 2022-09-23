import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData, storeUserData } from "../redux/slices/gemaSlice";
import { useForm } from "react-hook-form";
import UserOrder from "./Admin/AdminUsers/AdminUserOrder";
import Alert from "@mui/material/Alert";
import ReactLoading from "react-loading";
import cart from "./svg/cart-shopping-solid.svg";
import home from "./svg/house-solid.svg";
import "./styles/ProfileStyles.css";

function Profile() {
  const gema = useSelector((state) => state.gema);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmailorUsername, setLoginEmailorUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [adminStatus, setadminStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  //Auxiliary functions
  const handle = {
    register: async () => {
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
        navigate("/cart");
        setUserStatus(result.status);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
        setUserStatus(error.response.status);
      }
    },
    login: async () => {
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
        navigate("/cart");
        setLoginEmailorUsername("");
        setLoginPassword("");
        setLoginStatus(response.status);
      } catch (error) {
        console.log(error.response);
        setLoginStatus(error.response.status);
      }
    },
  };

  useEffect(() => {
    if (gema.userData.userId) {
      async function userProfile() {
        try {
          const data = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/users/${gema.userData.userId}`,
            headers: { Authorization: `Bearer ${gema.userData.token}` },
          });

          setUserInfo(data.data.user);
        } catch (error) {
          console.log(error);
        }
      }
      userProfile();
    }
  }, [userInfo]);

  async function editProfile(data) {
    try {
      const newData = await axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_URL}/users/${gema.userData.userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${gema.userData.token}`,
        },
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          phone: data.phone,
          adress: data.adress,
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        },
      });

      setUserStatus(newData.status);
    } catch (error) {
      console.log(error);
      setadminStatus(error.response.status);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return Profile ? (
    <>
      {gema.userData.token ? (
        userInfo && (
          <div className="container profileForm">
            <div className="row editForm">
              <div className="col-12 col-lg-6">
                <form
                  onSubmit={handleSubmit((data) => {
                    editProfile(data);
                  })}
                >
                  <strong>
                    <h2>PERFIL DEL USUARIO</h2>
                  </strong>
                  <div className="my-5 ">
                    <label htmlFor="firstname" className="form-label">
                      Nombre
                    </label>
                    <input
                      {...register("firstname", { required: "Debe agregar su nombre." })}
                      type="text"
                      defaultValue={userInfo.firstname}
                      className="form-control"
                      id="firstname"
                    />
                    <p className="requireMessage"> {errors.firstname?.message}</p>
                  </div>
                  <div className="my-5 ">
                    <label htmlFor="lastname" className="form-label">
                      Apellido
                    </label>
                    <input
                      {...register("lastname", { required: "Debe agregar su apellido." })}
                      type="text"
                      defaultValue={userInfo.lastname}
                      className="form-control"
                      name="lastname"
                      id="lastname"
                    />
                    <p className="requireMessage"> {errors.lastname?.message}</p>
                  </div>
                  <div className="my-5 ">
                    <label htmlFor="username" className="form-label">
                      Nombre de usuario
                    </label>
                    <input
                      {...register("username", { required: "Debe agregar un nombre de usuario." })}
                      type="text"
                      defaultValue={userInfo.username}
                      className="form-control"
                      name="username"
                      id="username"
                    />
                    <p className="requireMessage"> {errors.username?.message}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="phone" className="form-label">
                      Teléfono
                    </label>
                    <input
                      {...register("phone", { required: "Debe agregar un número de contacto." })}
                      defaultValue={userInfo.phone}
                      type="tel"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="09x xxx xxx"
                    />
                    <p className="requireMessage"> {errors.phone?.message}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="adress" className="form-label">
                      Dirección
                    </label>
                    <input
                      {...register("adress", { required: "Debe agregar una dirección." })}
                      defaultValue={userInfo.adress}
                      type="text"
                      name="adress"
                      className="form-control"
                      id="adress"
                    />
                    <p className="requireMessage"> {errors.adress?.message}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="currentPassword" className="form-label">
                      Contraseña actual
                    </label>
                    <input
                      {...register("currentPassword", {
                        required: "Debe agregar su contraseña.",
                      })}
                      type="password"
                      name="currentPassword"
                      className="form-control"
                      id="currentPassword"
                    />
                    <p className="requireMessage"> {errors.currentPassword?.message}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="newPassword" className="form-label">
                      Nueva contraseña
                    </label>
                    <input
                      {...register("newPassword")}
                      type="password"
                      name="newPassword"
                      className="form-control"
                      id="newPassword"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <button type="submit" className="save-btn ">
                      GUARDAR
                    </button>
                    <button
                      type="button"
                      className="logout-btn my-5"
                      onClick={() => {
                        dispatch(deleteUserData());
                        setUserInfo("");
                      }}
                    >
                      CERRAR SESIÓN{" "}
                    </button>
                  </div>
                  <div className="userEdited">
                    {userStatus === 200 ? (
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
                  <div className="editAdmin">
                    {adminStatus === 401 ? (
                      <Alert severity="error" icon={false}>
                        Los datos del administrador no pueden ser alterados!{" "}
                      </Alert>
                    ) : null}
                  </div>
                </form>
              </div>

              {userInfo.orderHistory ? (
                <div className="col-12 col-lg-6">
                  {userInfo.orderHistory.map((order, index) => {
                    return (
                      <div key={order._id} className="userOrders">
                        <UserOrder order={order} index={index} products={order.products} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="col-12 col-lg-6">
                  <h2>HISTORIAL DE ÓRDENES</h2>{" "}
                  <h5 className="my-5">No cuentas con órdenes realizadas aún.</h5>
                </div>
              )}
            </div>
          </div>
        )
      ) : (
        //  login/register
        <div className="container profileForm">
          <div className="row signInForm">
            <div className="col-12 col-lg-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handle.login();
                }}
              >
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
                    <button type="submit" className="login-btn">
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handle.register();
                  }}
                >
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
                    <button type="submit" className="register-btn ">
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
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"35%"}
        width={"35%"}
      />
    </div>
  );
}

export default Profile;
