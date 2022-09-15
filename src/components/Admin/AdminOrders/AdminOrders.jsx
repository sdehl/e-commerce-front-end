import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserOrder from "../AdminUsers/AdminUserOrder";
import { Link } from "react-router-dom";
import _ from "lodash";
<<<<<<< HEAD
import "../../styles/AdminStyles.css";

function AllOrders() {
  const token = useSelector((state) => state.gema.userData.token);
  const [allOrders, setAllOrders] = useState(null);
=======
import backArrow from "../../svg/arrow-left-solid.svg";
import "../../styles/AdminStyles.css";

function AllOrders() {
  const [allOrders, setAllOrders] = useState(null);
  const token = useSelector((state) => state.gema.userData.token);
>>>>>>> d3299aebcfc8c4b72490c17b2ed33a4e13775573

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
      await setAllOrders(response.data);
    },
    filterOrders: (filterBy) => {
      if (filterBy === "quantity") {
        const filteredOrders = _.sortBy(allOrders, [
          function (o) {
            return o.totalPrice;
          },
        ]);
      }
    },
  };
<<<<<<< HEAD

  useEffect(() => {
    handle.apiCall();
  }, []);

=======
  useEffect(() => {
    handle.apiCall();
  }, []);

>>>>>>> d3299aebcfc8c4b72490c17b2ed33a4e13775573
  return (
    allOrders && (
      <>
        <h1 className="m-4 d-flex justify-content-center">ORDENES</h1>
        <div className="container">
<<<<<<< HEAD
          <Link to={`/admin`}>
            <button className="irAtras"> Centro Administrativo </button>
          </Link>
=======
          <div className="mb-3 d-flex justify-content-between ">
            <Link className="link-admin-center" to={`/admin`}>
              <button className=" d-flex align-items-center irAtras px-0">
                {" "}
                <img className="arrow-icon " src={backArrow} alt="back arrow icon" />{" "}
                <span className="mx-2">CENTRO ADMINISTRATIVO </span>
              </button>
            </Link>
          </div>
>>>>>>> d3299aebcfc8c4b72490c17b2ed33a4e13775573
          {allOrders.map((order, index) => {
            return <UserOrder order={order} index={index} products={order.products} />;
          })}
        </div>
      </>
    )
  );
}

export default AllOrders;
