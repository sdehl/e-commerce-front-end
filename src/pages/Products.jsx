import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Products() {
  // const gema = useSelector((state) => state.gema);

  const [products, setProducts] = useState(null);

  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products`,
      });
      console.log(response.data);
      setProducts(response.data);
    },
    addProductTocart: {},
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  return (
    products && (
      <>
        <div className="container">
          <div className="conte d-flex justify-content-center mt-3">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
      </>
    )
  );
}

export default Products;
