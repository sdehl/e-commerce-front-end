import "./styles/SearchStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import search from "./svg/magnifying-glass-solid.svg";
import ProductCard from "./ProductCard";

function Search() {
  const [products, setProducts] = useState(null);
  const [productName, setProductName] = useState("");
  const [recomProducts, setRecomProducts] = useState("");

  //Helpers
  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
        params: { data: productName, fndBy: "Name" },
      });
      setProducts(response.data);
    },
    get3Products: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products/random`,
        params: { randomNumber: 3 },
      });
      return await setRecomProducts(response.data);
    },
  };

  //when params change the api is called again with new category
  useEffect(() => {
    handle.apiCall();
  }, [productName]);

  useEffect(() => {
    handle.get3Products();
  }, []);

  return (
    <>
      <div className="allSearchItems ">
        <h2 className="mb-2">NEW SEARCH</h2>
        <input
          className="searchInput mt-4"
          type="text"
          placeholder="TYPE HERE"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />{" "}
        <img className="icons mx-2" src={search} alt="search icon" />
      </div>
      <div className="">
        <div className="prodListSearch">
          {products &&
            (products.length > 0 ? (
              products.map((product) => {
                return <SearchProduct product={product} />;
              })
            ) : (
              <>
                <div className="mb-4">Lo sentimos no hay productos con ese Nombre</div>
                <div className="recommendations">
                  <h4>TAMBIÉN TE RECOMENDAMOS...</h4>
                  <div className="row">
                    {recomProducts.map((prod) => {
                      return <ProductCard key={prod._id} product={prod} />;
                    })}
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Search;
