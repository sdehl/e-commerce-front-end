import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleProductModal from "./SingleProductModal";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import "react-toastify/dist/ReactToastify.css";
import "./styles/FooterStyles.css";
import "./styles/ProductStyles.css";

function Products() {
  const params = useParams();
  const [products, setProducts] = useState();
  const [show, setShow] = useState(false);
  const [productForModal, setProductForModal] = useState(null);
  const notify = () => toast("Esto sobrepasa el alcance de nuestro proyecto!");

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setProductForModal(product);
    setShow(true);
  };

  useEffect(() => {
    handle.apiCall();
  }, []);

  //when params change the api is called again with new category
  useEffect(() => {
    handle.apiCall();
  }, [params]);

  //Helpers
  const handle = {
    apiCall: async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
        params: { data: params.category, fndBy: "Category" },
      });
      setProducts(response.data);
    },
  };

  return products ? (
    <>
      <div className="h-25 d-inline-block"></div>
      <div className="container">
        <SingleProductModal show={show} handleClose={handleClose} product={productForModal} />
        <ToastContainer />
        <div className="mt-5 d-flex justify-content-between">
          <h6 className="textProductsStart">{`Mostrando 1 – ${products.length} productos`}</h6>
          <h6 className="textProductsStart" onClick={notify}>
            Filter
          </h6>
        </div>
        <div className="productList">
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} handleShow={handleShow} />;
          })}
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
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
}

export default Products;
