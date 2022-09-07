import { Col, Row, Container } from "react-bootstrap";
import Tirador4 from "*.jpg";
import conjunto from "*.jpg";

export default function home() {
  return (
    <Container>
      <div class="position-relative">
        <Row className="d-flex flex-column align-items-center">
          <Col className="col-md-12">
            <img src={Tirador4} alt="banner" />
            <h4>En stock</h4>
            <h2>COLECCIÓN DE GRIFERÍAS</h2>
            <img src={conjunto} alt="banner" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
