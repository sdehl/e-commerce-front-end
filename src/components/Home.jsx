import { Carousel, Button } from "react-bootstrap";
import "./styles/HomeStyles.css";

function Home() {
  return (
    <div className="mb-5">
      <div className="row mb-5">
        <div className="col-7 ">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/05/Portada-2-scaled.jpg"
            }
            className="d-inline-block w-100"
            alt=""
          />
        </div>
        <div className="col-5 p-5">
          <div className="d-flex flex-column">
            <div className=" div-column justify-content-center p-3">
              ">
              <div className="row ">
                <img
                  src={
                    "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
                  }
                  className="d-block w-100"
                  alt=""
                />
              </div>
              <div className=" div-column justify-content-center p-3">
                <h4>EN STOCK</h4>
                <button className="buttons">QUICK VIEW</button>

                <h3>COLECCIÓN DE GRIFERÍAS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-5 m-5">
        <div className="col-4 d-flex flex-column justify-content-center text-center p-3">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
            }
            className="d-inline-block w-100 mb-4"
            alt=""
          />
          <h5 className="fw-bold pb-3">TIRADORES</h5>
          <p className="fw-bold">SHOP NOW</p>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center text-center p-3">
          <div>
            <img
              src={
                "https://www.gemainteriores.com/wp-content/uploads/2021/02/G01-OPA-PARED-BZ-7.jpg"
              }
              className="d-block w-100 mb-4"
              alt=""
            />
            <h5 className="fw-bold pb-3">HERRAJES</h5>
            <p className="fw-bold">SHOP NOW</p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center text-center p-3">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BK-5.jpeg"
            }
            className="d-block w-100 mb-4"
            alt=""
          />
          <h5 className="fw-bold pb-3">GRIFERÍA</h5>
          <p className="fw-bold">SHOP NOW</p>
        </div>
      </div>

      <div className="row p-5 m-5">
        <h5 className="  pt-5"># G E M A I N T E R I O R E S</h5>
        <h5 className="mb-5 mt-3 pb-5 ">Lo mejor de nuestros productos</h5>

        <br></br>
        <br></br>
        <br></br>

        <div styles="image" className="container col-3">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
            }
            className="image d-inline-block w-100 mb-4"
            alt=""
          />
        </div>
        <div styles="image" className="container col-3">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/02/G01-OPA-PARED-BZ-7.jpg"
            }
            className="image d-inline-block w-100 mb-4"
            alt=""
          />
        </div>
        <div styles="image" className="container col-3">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BK-5.jpeg"
            }
            styles="image"
            className="image d-inline-block w-100 mb-4"
            alt=""
          />
        </div>
        <div styles="image" className="container col-3">
          <img
            src={
              "https://www.gemainteriores.com/wp-content/uploads/2021/02/G02-TOP-SIMP-BZ-6.jpeg"
            }
            styles="image"
            className="image d-inline-block w-100 mb-4"
            alt="grifería-bronce"
          />
        </div>
        <div class="d-flex">
          <div class="vr"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
