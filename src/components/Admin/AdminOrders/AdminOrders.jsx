import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserOrder from "../AdminUsers/AdminUserOrder";
import { Link } from "react-router-dom";
import _ from "lodash";
import "../../styles/AdminStyles.css";

function AllOrders() {
  const token = useSelector((state) => state.gema.userData.token);
  const [allOrders, setAllOrders] = useState(null);

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

  useEffect(() => {
    handle.apiCall();
  }, []);

  return (
    allOrders && (
      <>
        <h1 className="m-4 d-flex justify-content-center">ORDENES</h1>
        <div className="container">
          <Link to={`/admin`}>
            <button className="irAtras"> Centro Administrativo </button>
          </Link>
          {allOrders.map((order, index) => {
            return <UserOrder order={order} index={index} products={order.products} />;
          })}
        </div>
      </>
    )
  );
}

export default AllOrders;
