import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

const AsideFooterHome = () => {
  return (
    <Container style={{ position: "sticky", top: "85px" }}>
      <Row md={2} className="sticky-top mt-4">
        <Col md={12} className="d-flex flex-wrap justify-content-around">
          <a href="#" className="text-decoration-none text-secondary me-1">
            Informazioni
          </a>
          <a href="#" className="text-decoration-none text-secondary me-1">
            Accessibilità
          </a>
          <a href="#" className="text-decoration-none text-secondary me-1">
            Centro assistenza
          </a>

          <Dropdown>
            <Dropdown.Toggle
              drop="up"
              className="bg-transparent p-0 text-secondary border-0"
              id="dropdown-basic"
            >
              Privacy & condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Informative sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Contrtto di licenza
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Termini e condizioni delle pagine
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Informativa sui cookie
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Informativa sul copyright
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Opzioni relative all&apos;informativa sulla privacy (Stato della
                California)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <a href="#" className="text-decoration-none text-secondary me-1">
            Opzioni per gli annunci pubblicitari
          </a>
          <a href="#" className="mt-1 text-decoration-none text-secondary me-1">
            Pubblicità
          </a>

          <Dropdown>
            <Dropdown.Toggle
              drop="up"
              className="bg-transparent p-0 text-secondary border-0"
              id="dropdown-basic"
            >
              Servizi alle aziende
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Assumi su LinkedIn</h6>
                <p>Trova, attrai e assumi</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Vendi con LinkedIn</h6>
                <p>Sblocca nuove opportunità di vendita</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Offerta di lavoro gratuita</h6>
                <p>Ottieni rapidamente candidati qualificati</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Fai pubblicità su LinkedIn</h6>
                <p>Acquisisci clienti e fai crescere la tua azienda</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Inizia con Premium</h6>
                <p>Amplia e sfrutta la tua rete</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Impara con LinkedIn</h6>
                <p>Corsi per formare i tuoi dipendenti</p>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className="d-flex flex-column">
                <h6>Admin Center</h6>
                <p>Gestisci i dettagli di fatturazione e account</p>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                className="d-flex flex-column border-top pt-3"
              >
                <h6>
                  Crea una pagina aziendale <PlusLg />
                </h6>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <a href="#" className="text-decoration-none text-secondary me-1">
            Scarica l&apos;app LinkedIn
          </a>
          <a href="#" className="text-decoration-none text-secondary me-1">
            Altro
          </a>
        </Col>
      </Row>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/16183/16183618.png"
          height={60}
          width={60}
          alt=""
        />
        <p className="mt-3 ms-1">LinkedIn Corporation &copy; 2024</p>
      </div>
    </Container>
  );
};
export default AsideFooterHome;
