import { Col, Container, Row } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";

const SectionEsperienza = () => {
  return (
    <Container>
      <Row className="flex-column border rounded-2 mb-1">
        <div>
          <h4 className="mb-0">Consigliato per te</h4>
        </div>
        <Col>
          <div className="border-bottom">
            <div className="d-flex justify-content-between mt-3">
            <img src="https://media.licdn.com/dms/image/v2/C560BAQGzzeiVGDWpkA/company-logo_100_100/company-logo_100_100/0/1631343804516?e=1742428800&amp;v=beta&amp;t=414sPvT5UcQ86uPNufh_ajLgp7E1fbiF6t8eA_QgjXY" alt="Logo di Università degli Studi del Piemonte Orientale"/>
              <h5 className="fs-6">Lingua del profilo</h5>
              <PencilFill />
            </div>
            <p className="fw-light">Italiano</p>
          </div>
        </Col>
        <Col>
          <div>
            <div className="d-flex justify-content-between mt-3">
              <h5 className="fs-6">Profilo pubblico e URL</h5>
              <PencilFill />
            </div>
            <p className="fw-light">
              www.linkedin.com/in/nome-cognome-02155489
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionEsperienza;
