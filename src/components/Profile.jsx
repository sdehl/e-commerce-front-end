import React from "react";
import "./styles/ProfileStyles.css";

function Profile() {
  return (
    <div className="profileForm">
      <div className="signInForm">
        <form>
          <strong>
            <h2> INICIAR SESIÓN</h2>
          </strong>
          <div className="my-5 ">
            <label for="email" className="form-label">
              Nombre de usuario o correo electrónico{" "}
              <span className="obligatory">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-5">
            <label for="password" className="form-label">
              Contraseña <span className="obligatory">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check rememberMe">
            <label className="form-check-label">
              {" "}
              <input type="checkbox" className="form-check-input" />
              Recordarme
            </label>{" "}
            <button type="submit" className="login-btn">
              INICIAR SESIÓN
            </button>
          </div>
          <div>
            <a className="forgetPassword" href="#">
              ¿Olvidaste la contraseña?
            </a>
          </div>
        </form>
      </div>

      <div className="registerForm">
        <form>
          <strong>
            <h2> REGISTRARME</h2>
          </strong>
          <div className="my-5 ">
            <label for="email" className="form-label">
              Correo electrónico <span className="obligatory">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-5">
            <label for="password" className="form-label">
              Contraseña <span className="obligatory">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="login-btn">
            REGISTRARME
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
