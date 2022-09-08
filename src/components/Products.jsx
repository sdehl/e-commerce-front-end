import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SingleProductModal from "./SingleProductModal";

function Products() {
  const params = useParams();
  const [products, setProducts] = useState();
  console.log(params.category);
  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products`,
        params: { category: params.category },
      });
      setProducts(response.data);
    },
    addProductTocart: {},
  };

  useEffect(() => {
    handle.apiCall();
  }, []);
  // console.log("despues", gema.state);

  useEffect(() => {
    handle.apiCall();
  }, [params]);

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
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      </>
    )
  );
}

export default Products;
