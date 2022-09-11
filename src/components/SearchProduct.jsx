import "./styles/SearchStyles.css";
import { Link } from "react-router-dom";

function SearchProduct({ product }) {
  const filteredPicture = product.pictures[0].replaceAll(`"`, ``);

  return (
    product && (
      <div className="row">
        <div className="col-3 m-3">
          {" "}
          <img src={filteredPicture} className="imageSearch" alt="..."></img>
        </div>
        <div className="col-7 m-3 d-flex flex-column justify-content-center">
          <Link className="product-title-link" to={`/product/${product._id}`}>
            <h6 className="nameSearch">{product.name.toUpperCase()}</h6>
          </Link>
          <div className="descriptionSearch">{product.description}</div>
        </div>
      </div>
    )
  );
}

export default SearchProduct;
