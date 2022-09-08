import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Products() {
  const gema = useSelector((state) => state.gema);
  const [products, setProducts] = useState();
  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products`,
      });
      setProducts(response.data);
    },
    addProductTocart: {},
  };

  useEffect(() => {
    handle.apiCall();
  }, []);
  console.log("despues", gema.state);

  return (
    products && (
      <>
        <div className="h-25 d-inline-block"></div>
        <div className="container">
          <div className="mt-5 d-flex justify-content-between">
            <h6 className="textProductsStart">{`Mostrando 1 – ${products.length} productos`}</h6>
            <h6 className="textProductsStart">Filter</h6>
          </div>
          <div className="productList">
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
