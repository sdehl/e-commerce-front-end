import { useNavigate } from "react-router";
import "./styles/ErrorPageStyles.css";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="erroPage d-flex flex-column justify-content-center align-items-center">
      <h1 className="my-2">ERROR</h1>
      <h5 className="my-2">PAGE NOT FOUND</h5>
      <p className="my-2">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <button
        className="buttonHome my-2"
        onClick={() => {
          navigate("/");
        }}
      >
        BACK TO HOME
      </button>
    </div>
  );
}

export default ErrorPage;
