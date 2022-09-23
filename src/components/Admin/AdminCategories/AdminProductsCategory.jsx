import AllProducts from "../AdminProducts/AdminProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../styles/AdminStyles.css";

function ProductsCategory() {
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
      setProductsByCategory(response.data);
    },
  };

  useEffect(() => {
    handle.getProductsByCategory();
  }, []);

  return (
    productsByCategory && (
      <>
        <AllProducts categoryName={params.categoryName} />
      </>
    )
  );
}

export default ProductsCategory;
