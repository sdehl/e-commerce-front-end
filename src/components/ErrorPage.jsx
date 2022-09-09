import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="erroPage d-flex flex-column justify-content-center align-items-center">
      <h1>ERROR</h1>
      <h5>PAGE NOT FOUND</h5>
      <p>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <button
        className="buttonHome"
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
