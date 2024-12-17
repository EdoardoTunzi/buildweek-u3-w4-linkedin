import { Button, Col, Container, Row } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";

const SectionConsigliati = () => {
  return (
    <Container className="border rounded-2 p-3 mt-2 bg-white">
      <Row className="justify-content-around">
        <div>
          <h4 className="mb-0">Consigliato per te</h4>
          <p className="text-secondary">
            <EyeFill /> Solo per te
          </p>
        </div>

        <Col md={6} style={{ width: "450px" }} className="border rounded-2 gx-5 py-3">
          <div className="d-flex align-items-center">
            <img className="me-3" src="https://static.licdn.com/aero-v1/sc/h/7180r6w1mkjskxrgnbta6aeu1" alt="" />
            <h5 className="fs-6">In quale settore lavori?</h5>
          </div>
          <div>
            <p className="fs-6">Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo.</p>
          </div>
          <Button className="rounded-pill border-dark fw-semibold text-dark bg-light py-1">Aggiungi settore</Button>
        </Col>

        <Col md={6} style={{ width: "450px" }} className="border rounded-2 py-3 gx-5">
          <div className="d-flex align-items-center">
            <img className="me-3" src="https://static.licdn.com/aero-v1/sc/h/7lvc02mht78mhn2h6hk5ipiha" alt="fotocamera icon" />
            <h5 className="fs-6">Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti</h5>
          </div>
          <div>
            <p className="fs-6">Gli utenti che aggiungono un settore ricevono fino a 2,3 volte più visualizzazioni del profilo.</p>
          </div>
          <Button className="rounded-pill border-dark fw-semibold text-dark bg-light py-1">Aggiungi settore</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionConsigliati;
