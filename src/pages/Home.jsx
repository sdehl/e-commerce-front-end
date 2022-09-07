import { Button, Modal, Form, Row } from "react-bootstrap";
import Tirador4 from "*.jpg";

export default function home() {
  return (
    <Row className="d-flex">
      <col className="flex flex-column">
        <img src={Tirador4} alt="banner" />
        <h4>En stock</h4>
        <h2>COLECCIÓN DE GRIFERÍAS</h2>
      </col>
    </Row>
  );
}
