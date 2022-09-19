import { Link } from "react-router-dom";
import "../styles/AdminStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData } from "../../redux/slices/gemaSlice";
import { useEffect, useState } from "react";
import axios from "axios";

function Index() {
  const gema = useSelector((state) => state.gema);
  const token = useSelector((state) => state.gema.userData.token);
  const dispatch = useDispatch();

  const [adminUser, setAdminUser] = useState();
  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/users/${gema.userData.userId}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdminUser(`  ${response.data.user.firstname} ${response.data.user.lastname}`);
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);
  return (
    <div className="d-flex justify-content-center flex-column divAllButtonsIndex">
      <div className="mt-5 d-flex justify-content-center">
        <h5>{`Bienvenido/a: ${adminUser}`}</h5>
      </div>
      <h1 className="titleIndexAdmin">CENTRO ADMINISTRATIVO</h1>

      <h4 className="subText">
        Aquí se podrá editar y/o modificar toda la información de la página web
      </h4>
      <div className="contDiv row d-flex justify-content-center m-5">
        <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center m-2">
          {" "}
          <Link to="/admin/orders">
            {" "}
            <button className="update">ORDENES</button>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center m-2">
          {" "}
          <Link to="/admin/users">
            {" "}
            <button className="update">USUARIOS</button>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center m-2">
          {" "}
          <Link to="/admin/products">
            {" "}
            <button className="update">PRODUCTOS</button>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center m-2">
          {" "}
          <Link to="/admin/categories">
            {" "}
            <button className="update">CATEGORIAS</button>
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center m-2">
          {" "}
          <div>
            <button
              className=" update"
              onClick={() => {
                dispatch(deleteUserData());
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
