import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight, EyeFill } from "react-bootstrap-icons";

const Analisi = () => {
  return (
    <>
      <Container className="border border-1 rounded-2 mt-2 bg-white">
        <div className="p-2 ">
          <h4 className="mb-1">Analisi</h4>
          <p className="text-secondary">
            <EyeFill /> Solo per te
          </p>
        </div>
        <Row className="p-3">
          <Col xs={4}>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="30"
                height="30"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              <div className="ms-2">
                <p className="mb-1 fw-semibold">{Math.floor(Math.random() * 100)} visualizzazioni del profilo</p>
                <p>Scopri chi ha visitato il tuo profilo</p>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="30"
                height="30"
                focusable="false"
              >
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
              </svg>
              <div className="ms-2">
                <p className="mb-1 fw-semibold">{Math.floor(Math.random() * 100)} impressioni del post</p>
                <p className="mb-1">Crea un post per aumentare l&apos;interesse</p>
                <p className="text-secondary">Ultimi 7 giorni</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Button className="bg-white border-0 border-top text-dark d-flex align-items-center justify-content-center fw-semibold">
            Mostra tutte le analisi <ArrowRight className="fs-5" />
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Analisi;
