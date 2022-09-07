import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Products() {
  // const gema = useSelector((state) => state.gema);

  const [products, setProducts] = useState();

  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products`,
      });
      console.log(response.data)
      setProducts(response.data);
    },
    addProductTocart: {},
  };

  useEffect(() => {
    handle.apiCall();
  }, []);
  console.log(products);
  return products && (
    <>
      <div className="container">
        <div class="conte d-flex justify-content-center mt-3">
          {products.map((product) => {
            return <p>{product.name}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
