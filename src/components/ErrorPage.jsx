import { useNavigate } from "react-router";
import "./styles/ErrorPageStyles.css";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="erroPage d-flex flex-column justify-content-center align-items-center">
      <h1 className="my-2">ERROR</h1>
      <h5 className="my-2">PAGINA NO ENCONTRADA</h5>
      <p className="my-2">
        Oops! La página que buscabas no existe. Puede haber sido modificada o eliminada.
      </p>
      <button
        className="buttonHome my-2"
        onClick={() => {
          navigate("/");
        }}
      >
        VOLVER A INICIO
      </button>
    </div>
  );
}

export default ErrorPage;
