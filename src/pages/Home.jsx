import { Col, Row, Container, Carousel } from "react-bootstrap";

import Tirador4 from "*.jpg";
import conjunto from "*.jpg";

function home() {
  return (
    <Container>
      <div class="position-relative">
        <Row className="d-flex flex-column align-items-center">
          <col>
            <Carousel>
              <Carousel.Item>
                <img src={Tirador4} className="d-bloxk w-100" alt="tirador" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={conjunto} alt="conjunto color bronce" />

                <Carousel.Caption>
                  <h4>En stock</h4>
                  <h2>COLECCIÓN DE GRIFERÍAS</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </col>
        </Row>
      </div>
    </Container>
  );
}

export default home;
