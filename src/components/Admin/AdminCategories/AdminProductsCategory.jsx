import AllProducts from "../AdminProducts/AdminProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../../styles/AdminStyles.css";

function ProductsCateogry() {
  const [productsByCategory, setProductsByCategory] = useState();
  const token = useSelector((state) => state.gema.userData.token);

  const params = useParams();
  const handle = {
    getProductsByCategory: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories/products/${params.categoryName}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      setProductsByCategory(response.data);
    },
  };

  useEffect(() => {
    handle.getProductsByCategory();
  }, []);

  return (
    productsByCategory && (
      <>
        <AllProducts allProducts={productsByCategory} />
      </>
    )
  );
}

export default ProductsCateogry;
