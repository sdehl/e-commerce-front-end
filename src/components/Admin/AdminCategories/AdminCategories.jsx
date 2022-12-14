import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import backArrow from "../../svg/arrow-left-solid.svg";
import ReactLoading from "react-loading";
import "../../styles/AdminStyles.css";

function AllCategories() {
  const [allCategories, setAllCategories] = useState(null);
  const token = useSelector((state) => state.gema.userData.token);
  const navigate = useNavigate();

  const handle = {
    apiCall: async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/categories`,
          headers: { Authorization: `Bearer ${token}` },
        });
        setAllCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return allCategories ? (
    <div className="divCategory">
      <h1 className="m-4 d-flex justify-content-center">CATEGORÍAS</h1>
      <div className="container">
        <div className="m-3 d-flex justify-content-between ">
          <Link className="link-admin-center" to={`/admin`}>
            <button className=" d-flex align-items-center irAtras px-0">
              {" "}
              <img className="arrow-icon " src={backArrow} alt="back arrow icon" />{" "}
              <span className="mx-2">CENTRO ADMINISTRATIVO </span>
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-5 flex-column align-items-center flex-lg-row">
          {allCategories.map((category) => {
            return (
              <div key={category._id} className="buttonCategory d-flex justify-content-between">
                <button
                  className="update m-3"
                  onClick={() => {
                    navigate(`/admin/categories/${category.name}`);
                  }}
                >
                  {category.name.toUpperCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"50%"}
        width={"50%"}
      />
    </div>
  );
}

export default AllCategories;
