import { Link } from "react-router-dom";

function index() {
  return (
    <div className="d-flex justify-content-between align-items-center">
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
  );
}

export default index;
