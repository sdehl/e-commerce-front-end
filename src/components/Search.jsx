import "./styles/SearchStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import search from "./svg/magnifying-glass-solid.svg";

function Search() {
  const params = useParams();
  const [products, setProducts] = useState(null);
  const [productName, setProductName] = useState("");

  //when params change the api is called again with new category
  useEffect(() => {
    handle.apiCall();
  }, [productName]);

  useEffect(() => {
    console.log(products);
  }, []);

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
  };

  return (
    <>
      <div className="allSearchItems ">
        <h2 classNem="mb-2">NEW SEARCH</h2>
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
          {products && (products.length > 0 ? (
            products.map((product) => {
              return <SearchProduct product={product} />;
            })
          ) : (
            <div>Lo sentimos no hay productos con ese Nombre</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
