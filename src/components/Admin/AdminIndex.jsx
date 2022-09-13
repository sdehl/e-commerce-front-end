import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <h1 className="titleIndexAdmin">CENTRO ADMINISTRATIVO</h1>
      <h4 className="subText">
        Aquí se podrá editar y/o modificar toda la información de la página web
      </h4>
      <div className="contDiv d-flex justify-content-between align-items-center">
        <Link to="/adminUsers">
          {" "}
          <button className="updateButton" onClick={() => {}}>
            Orders{" "}
          </button>
        </Link>
        <Link to="/adminUsers">
          {" "}
          <button className="updateButton" onClick={() => {}}>
            Users{" "}
          </button>
        </Link>

        <Link to="/adminProducts">
          {" "}
          <button className="updateButton" onClick={() => {}}>
            Products{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

export default index;
