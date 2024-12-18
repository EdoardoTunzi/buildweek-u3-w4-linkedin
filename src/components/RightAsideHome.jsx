import { Col, Container, Row } from "react-bootstrap";
import { BoxArrowRight, Info } from "react-bootstrap-icons";

const RightAsideHome = () => {
  return (
    <>
      <Container className="mt-2">
        <Row className="flex-column ">
          <Col md={12} className="border rounded-3 bg-white p-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <h4>In primo piano</h4>
              <Info className="text-bg-dark rounded-1" />
            </div>
            <p className="text-secondary">a cura di LinkedIn Notizie</p>
            <Col md={12}>
              <h6 className="">Tech: le tendenze del 2025</h6>
              <p className="text-secondary"> 5 ore fa • 1.786 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Revolut</h6>
              <p className="text-secondary">2 giorni fa • 665 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Istantanee dal Maximall Pompeii</h6>
              <p className="text-secondary">5 ore fa • 319 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Come sarà il lavoro nel 2025</h6>
              <p className="text-secondary">3 ore fa</p>
            </Col>
            <Col md={12}>
              <h6 className="">Big Ideas: 15 spunti per il 2025</h6>
              <p className="text-secondary">5 ore fa • 4.496 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Unicredit-Banco Bpm</h6>
              <p className="text-secondary">4 ore fa • 3.715 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Che cosa fa Gemini 2.0</h6>
              <p className="text-secondary">5 ore fa • 496 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Approvato il Ddl Lavoro</h6>
              <p className="text-secondary">5 ore fa • 1.232 lettori</p>
            </Col>
            <Col md={12}>
              <h6 className="">Censis fotografa gli italiani</h6>
              <p className="text-secondary">5 ore fa • 351 lettori</p>
            </Col>

            <h6 className="text-secondary mb-3">I giochi di oggi</h6>
            <Col>
              <div className="d-flex mb-3 align-items-center">
                <img src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" width={40} alt="" />
                <div className="ms-2">
                  <h6 className="m-0">Queens</h6>
                  <p className="m-0 text-secondary">Incorona ogni regione</p>
                </div>
                <a href="#Tango game" className="ms-auto text-dark fs-4">
                  <BoxArrowRight className="ms-auto" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <img src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" width={40} alt="" />
                <div className="ms-2">
                  <h6 className="m-0">Tango</h6>
                  <p className="m-0 text-secondary">Armonizza la griglia</p>
                </div>
                <a href="#Tango game" className="ms-auto text-dark fs-4">
                  <BoxArrowRight className="ms-auto" />
                </a>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RightAsideHome;
