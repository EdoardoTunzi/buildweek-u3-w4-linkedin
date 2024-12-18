import { Container, Row, Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
const Informazioni = () => {
  return (
    <Container className="border border-1 rounded-2 mt-2 bg-white ">
      <div className="d-flex align-items-center justify-content-between p-3">
        <h2 className="mb-0">Informazioni</h2>
        <p className="fs-4">
          <Pencil />
        </p>
      </div>
      <Row className="mt-2 align-items-end">
        <Col xs={10}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>

            <li>React</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Informazioni;
