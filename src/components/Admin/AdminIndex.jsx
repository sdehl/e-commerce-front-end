import { Link } from "react-router-dom";
import "../styles/AdminStyles.css";

function index() {
  return (
    <>
      <h1 className="titleIndexAdmin">CENTRO ADMINISTRATIVO</h1>
      <h4 className="subText">
        Aquí se podrá editar y/o modificar toda la información de la página web
      </h4>
      <div className="contDiv d-flex justify-content-between align-items-center">
        <Link to="/admin/orders">
          {" "}
          <button className="update" onClick={() => {}}>
            Orders{" "}
          </button>
        </Link>
        <Link to="/admin/users">
          {" "}
          <button className="update" onClick={() => {}}>
            Users{" "}
          </button>
        </Link>

        <Link to="/admin/products">
          {" "}
          <button className="update" onClick={() => {}}>
            Products{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

export default index;
