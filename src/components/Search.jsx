import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import SearchProduct from "./SearchProduct";
import ProductCard from "./ProductCard";
import ReactLoading from "react-loading";
import search from "./svg/magnifying-glass-solid.svg";
import "./styles/SearchStyles.css";

function Search() {
  const [products, setProducts] = useState(null);
  const [productName, setProductName] = useState(" ");
  const [recomProducts, setRecomProducts] = useState("");
  const { state } = useLocation();

  //auxiliary function
  const handle = {
    apiCall: async () => {
      if (productName) {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/products`,
          params: { data: productName, fndBy: "Name" },
        });
        setProducts(response.data);
      }
    },
    get3Products: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products/random`,
        params: { randomNumber: 3 },
      });
      return setRecomProducts(response.data);
    },
  };

  //when params change the api is called again with new category
  useEffect(() => {
    if (state) {
      setProductName(state.elementToSearch);
    } else {
      setProductName(" ");
    }
    handle.get3Products();
  }, []);

  useEffect(() => {
    handle.apiCall(productName);
  }, [productName]);

  return products && recomProducts ? (
    <>
      <div className="allSearchItems ">
        <h2 className="mb-2">BUSCAR</h2>
        <input
          className="searchInput mt-4"
          type="text"
          placeholder="TYPE HERE"
          value={productName}
          autoFocus="autofocus"
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
                return <SearchProduct key={product._id} product={product} />;
              })
            ) : (
              <>
                <div className="mb-4">Lo sentimos, no hay productos con este Nombre</div>
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
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      {" "}
      <ReactLoading
        className="m-2 mt-0"
        type={"bubbles"}
        color={"lightgray"}
        height={"35%"}
        width={"35%"}
      />
    </div>
  );
}

export default Search;
