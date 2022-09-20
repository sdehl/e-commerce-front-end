import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/HomeStyles.css";

function Home() {
  const [categories, setCategories] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  return (
    categories && (
      <div className="mb-5">
        <div className="row mb-5">
          <div className="col-lg-7 col-12">
            <img
              src={"https://www.gemainteriores.com/wp-content/uploads/2021/05/Portada-2-scaled.jpg"}
              className="d-inline-block w-100"
              alt="logo"
            />
          </div>
          <div className="col-lg-5 col-12 p-5">
            <div className="d-flex flex-column">
              <div className=" div-column justify-content-center p-3">
                <div className="row d-flex flex-column">
                  <div className="imageHomeDiv">
                    {" "}
                    <img
                      className="imageHomeStock"
                      src={
                        "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
                      }
                      id="imageHome"
                      alt="logo"
                    />
                  </div>

                  <div className="div-column d-flex flex-column justify-content-center align-items-center p-3">
                    <h4 className="enStock mb-3">EN STOCK</h4>
                    <h3 className="boldCollection mb-3">COLECCIÓN DE GRIFERÍAS</h3>
                    <button
                      className="homeButton"
                      onClick={() => {
                        navigate("/products");
                      }}
                    >
                      DESCUBRIR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row animatedImages p-5 m-5">
          <div className="col-md-4 col-12 d-flex flex-column justify-content-center text-center p-3">
            <div>
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
                }
                className="d-inline-block w-100 mb-4 imageAnimated"
                alt=""
              />
              <h5 className="fw-bold pb-3">{categories[1].name}</h5>
              <Link to={`/products/${categories[1].name}`}>
                <p className="fw-bold hover-underline-animation ">SHOP NOW</p>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex flex-column justify-content-center text-center p-3">
            <div>
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G01-OPA-PARED-BZ-7.jpg"
                }
                className="d-block w-100 mb-4 imageAnimated"
                alt=""
              />
              <h5 className="fw-bold pb-3">{categories[2].name}</h5>
              <Link to={`/products/${categories[2].name}`}>
                <p className="fw-bold hover-underline-animation ">SHOP NOW</p>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-12 d-flex flex-column justify-content-center text-center p-3">
            <div>
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BK-5.jpeg"
                }
                className="d-block w-100 mb-4"
                alt=""
              />
              <h5 className="fw-bold pb-3">{categories[0].name}</h5>
              <Link to={`/products/${categories[0].name}`}>
                <p className="fw-bold hover-underline-animation ">SHOP NOW</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="row p-5 m-5">
          <div className="pl-3 text-center">
            <p className=" hashtag"># G E M A I N T E R I O R E S</p>
            <h6 className="fs-3 mb-5 mt-3 pb-5 ">Lo mejor de Nuestro Instagram</h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="d-flex mb-4 align-items-center">
            <a
              href="https://www.instagram.com/gemainteriores/"
              className="removeLinkDeco"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logoGemaHome m-1"
                alt="logoHomeGema"
                src="https://www.gemainteriores.com/wp-content/uploads/sb-instagram-feed-images/gemainteriores.jpg"
              ></img>
              <h6 className="m-1 fw-bold d-inline linkDeco">GEMAINTERIORES</h6>
            </a>
          </div>
          <div styles="image" className="container col-md-6 col-12 col-lg-3">
            <a href="https://www.instagram.com/p/CY5Ip1vtKI4/" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G01-OPA-PARED-BZ-3.jpg"
                }
                className="image d-inline-block w-100"
                alt=""
              />
            </a>
          </div>
          <div styles="image" className="container col-md-6 col-12 col-lg-3">
            <a href="https://www.instagram.com/p/CZX6EcRlAnV/" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BK-5.jpeg"
                }
                className="image d-inline-block w-100 mb-4"
                alt=""
              />
            </a>
          </div>
          <div styles="image" className="container col-md-6 col-12 col-lg-3">
            <a href="https://www.instagram.com/p/Chk9zV-srt9/" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G01-OPA-PARED-BZ-7.jpg"
                }
                styles="image"
                className="image d-inline-block w-100 mb-4"
                alt=""
              />
            </a>
          </div>
          <div styles="image" className="container col-md-6 col-12 col-lg-3">
            <a href="https://www.instagram.com/p/CYSWP-hsnCj/" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://www.gemainteriores.com/wp-content/uploads/2021/02/G01-OPA-PARED-BZ-5.jpg"
                }
                styles="image"
                className="image d-inline-block w-100 mb-4"
                alt="grifería-bronce"
              />
            </a>
          </div>
        </div>
      </div>
    )
  );
}
export default Home;
