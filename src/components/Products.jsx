import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Products() {
  const params = useParams();
  const [products, setProducts] = useState();

  //the call is made if the page is reloaded
  useEffect(() => {
    handle.apiCall();
  }, []);

  //when params change the api is called again with new category
  useEffect(() => {
    handle.apiCall();
  }, [params]);

  //Aux functions
  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
        params: { infoToFindBy: params.category },
      });
      setProducts(response.data);
    },
  };

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
