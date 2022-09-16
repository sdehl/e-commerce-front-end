import { Link } from "react-router-dom";
import "../styles/AdminStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData } from "../../redux/slices/gemaSlice";

function Index() {
  const gema = useSelector((state) => state.gema);
  const dispatch = useDispatch();
  return (
    <>
      <div className="m-4 d-flex justify-content-center">{`Bienvenido/a:`}</div>
      <h1 className="titleIndexAdmin">CENTRO ADMINISTRATIVO </h1>

      <h4 className="subText">
        Aquí se podrá editar y/o modificar toda la información de la página web
      </h4>
      <div className="contDiv d-flex justify-content-between align-items-center">
        <Link to="/admin/orders">
          {" "}
          <button className="update">ORDENES</button>
        </Link>
        <Link to="/admin/users">
          {" "}
          <button className="update">USUARIOS</button>
        </Link>

        <Link to="/admin/products">
          {" "}
          <button className="update">PRODUCTOS</button>
        </Link>
        <button
          className=" update"
          onClick={() => {
            dispatch(deleteUserData());
          }}
        >
          LOGOUT
        </button>
      </div>
    </>
  );
}

export default Index;
