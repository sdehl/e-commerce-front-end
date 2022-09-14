import { Link } from "react-router-dom";
import "../styles/AdminStyles.css";
import { useSelector } from "react-redux";

function Index() {
  const gema = useSelector((state) => state.gema);
  console.log(gema);
  return (
    <>
      <div className="m-4 d-flex justify-content-center">
        {`Bienvenido/a:`}
      </div>
      <h1 className="titleIndexAdmin">CENTRO ADMINISTRATIVO</h1>
      <h4 className="subText">
        Aquí se podrá editar y/o modificar toda la información de la página web
      </h4>
      <div className="contDiv d-flex justify-content-between align-items-center">
        <Link to="/admin/orders">
          {" "}
          <button className="update" onClick={() => { }}>
            Ordenes{" "}
          </button>
        </Link>
        <Link to="/admin/users">
          {" "}
          <button className="update" onClick={() => { }}>
            Usuarios{" "}
          </button>
        </Link>

        <Link to="/admin/products">
          {" "}
          <button className="update" onClick={() => { }}>
            Productos{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

export default Index;
