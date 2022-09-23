import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserOrder from "../AdminUsers/AdminUserOrder";
import { Link } from "react-router-dom";
import _ from "lodash";
import backArrow from "../../svg/arrow-left-solid.svg";
import ReactLoading from "react-loading";
import "../../styles/AdminStyles.css";

function AllOrders() {
  const [allOrders, setAllOrders] = useState(null);
  const token = useSelector((state) => state.gema.userData.token);

  const handle = {
    grabPicture: (product) => {
      return product.pictures[0].replaceAll(`"`, ``);
    },
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/orders`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllOrders(response.data);
    },
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return allOrders ? (
    <>
      <h1 className="m-4 d-flex justify-content-center">ORDENES</h1>
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
        {allOrders.map((order, index) => {
          return (
            <UserOrder key={order._id} order={order} index={index} products={order.products} />
          );
        })}
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"35%"}
        width={"35%"}
      />
    </div>
  );
}

export default AllOrders;
