import { Col, Container, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const LinguaProfilo = () => {
  return (
    <Container className="bg-white">
      <Row className="flex-column border rounded-2">
        <Col>
          <div className="border-bottom">
            <div className="d-flex justify-content-between mt-3">
              <h5 className="fs-6">Lingua del profilo</h5>
              <Pencil />
            </div>
            <p className="fw-light">Italiano</p>
          </div>
        </Col>
        <Col>
          <div>
            <div className="d-flex justify-content-between mt-3">
              <h5 className="fs-6">Profilo pubblico e URL</h5>
              <Pencil />
            </div>
            <p className="fw-light">www.linkedin.com/in/nome-cognome-02155489</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LinguaProfilo;
