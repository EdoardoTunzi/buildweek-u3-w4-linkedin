import { Col, Container, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const LinguaProfilo = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container className="bg-white rounded-3">
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
            <p className="fw-light">
              www.linkedin.com/in/{user.name}-{user.surname}-02155489
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LinguaProfilo;
