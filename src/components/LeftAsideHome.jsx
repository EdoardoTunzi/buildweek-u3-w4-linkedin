import { Col, Container, Row } from "react-bootstrap";
import {
  BookmarkFill,
  Box,
  PersonPlusFill,
  PlusLg,
} from "react-bootstrap-icons";

const LeftAsideHome = () => {
  return (
    <Container>
      <Row md={2} className="mt-5">
        <Col className="flex-column border rounded-3">
          <Col md={12} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2983/2983067.png"
              width={80}
              height={80}
              alt=""
              className="my-4"
            />
          </Col>
          <Col md={12} className="text-center">
            <a
              href="#userprofile"
              className="text-decoration-none fw-semibold text-dark fs-5"
            >
              Nome Cognome
            </a>
            <p className="text-secondary">Descrizione profilo</p>
          </Col>
          <hr />
          <Col md={12}>
            <div className="d-flex justify-content-between pt-2 align-items-baseline">
              <div>
                <p className="my-0 text-secondary">Collegamenti</p>
                <p className="fw-semibold">Espandi la tua rete</p>
              </div>
              <PersonPlusFill />
            </div>
          </Col>
          <hr />
          <Col md={12} className="">
            <div>
              <p className="text-secondary">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <div className="d-flex align-items-baseline">
                <Box className="text-warning" />
                <p className="ms-2 fw-semibold">Prova premium gratis</p>
              </div>
            </div>
          </Col>
          <hr />
          <Col md={12} className="border-bottom">
            <div className="d-flex">
              <div>
                <BookmarkFill className="text-secondary" />
              </div>
              <p className="ms-2 fw-semibold">Elementi salvati</p>
            </div>
          </Col>
        </Col>
      </Row>

      <Row md={2} className="flex-column mt-2">
        <Col className="flex-column border rounded-3">
          <div className="mt-2">
            <a
              href="#gruppi"
              className="text-primary fw-semibold text-decoration-none"
            >
              Gruppi
            </a>
            <div className="d-flex justify-content-between align-items-baseline">
              <a
                href="#eventi"
                className="fw-semibold text-primary mt-3 mb-0 text-decoration-none"
              >
                Eventi
              </a>
              <PlusLg className="text-dark fs-5" />
            </div>
          </div>
          <hr />
          <p className="text-center fw-demibold">Scopri di più</p>
        </Col>
      </Row>
    </Container>
  );
};
export default LeftAsideHome;
