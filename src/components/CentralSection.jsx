import { Button, CloseButton, Col, Container, Row } from "react-bootstrap";

const CentralSection = () => {
  return (
    <Container>
      <Row>
        <Col
          md={10}
          className="d-flex align-items-center justify-content-between rounded-3 border"
        >
          <div className="p-4">
            <h5>Ricevi notifiche sulle offerte di lavoro che ti interessano</h5>
            <p className="fw-light text-secondary">
              Crea un avviso per una qualifica, un&apos;azienda o delle parole
              chiave.
            </p>
            <Button className="rounded-pill py-1 px-3">Crea avviso</Button>
          </div>
          <div className="d-flex p-4">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/1svkhjtd476ns0r6daqolu2xk"
              width={150}
              height={150}
              className="me-2 my-2"
            />
            <CloseButton className="mt-2"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CentralSection;
