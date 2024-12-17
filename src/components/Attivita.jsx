import { Container, Row, Button } from "react-bootstrap";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
const Attivita = () => {
  return (
    <Container className="border border-1 rounded-2 mt-4 ">
      <Row className="p-3">
        <div className="d-flex justify-content-between ">
          <div>
            <h2 className="mb-0">Attività</h2>
            <p className="text-primary fw-semibold">
              {Math.floor(Math.random() * 100)} follower
            </p>
          </div>
          <div>
            <Button className="bg-white text-primary d-inline-block rounded-pill fw-semibold">
              Crea un post
            </Button>
            <p className="ms-3 d-inline-block fs-4">
              <Pencil />
            </p>
          </div>
        </div>
        <div>
          <p className="fw-bold m-0">Non hai ancora pubblicato nulla</p>
          <p>I post che condividi appariranno qui</p>
        </div>
      </Row>

      <Row>
        <Button className="bg-white border-0 border-top text-dark d-flex align-items-center justify-content-center fw-semibold">
          Mostra tutte le attività <ArrowRight className="fs-5" />
        </Button>
      </Row>
    </Container>
  );
};

export default Attivita;