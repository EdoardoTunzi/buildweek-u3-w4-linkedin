import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import {
  ArrowRight,
  GearFill,
  QuestionCircleFill,
  ShieldShaded
} from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <>
      <Container className="d-flex">
        <Row md={3}>
          <Col className="text-secondary mb-2"> Informazioni </Col>
          <Col className="text-secondary mb-2"> Accessibilità </Col>
          <Col className="text-secondary mb-2"> Talent Solutions </Col>
          <Col className="text-secondary mb-2">
            Informativa sulla community professionale
          </Col>
          <Col className="text-secondary mb-2"> Carriera </Col>
          <Col className="text-secondary mb-2">Soluzioni di marketing</Col>
          <Col className="mb-2 px-0">
            <Dropdown drop="up">
              <Dropdown.Toggle
                className="text-secondary fs-6"
                variant="none"
                id="dropdown-basic"
              >
                Privacy & condizioni
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="fw-semibold" href="#/action-1">
                  Informativa sulla privacy
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold" href="#/action-2">
                  Contratto di licenza
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold" href="#/action-3">
                  Termini e condizioni delle pagine
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold" href="#/action-3">
                  Informativa sui cookie
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold" href="#/action-3">
                  Informativa sul copyright
                </Dropdown.Item>
                <Dropdown.Item className="fw-semibold" href="#/action-3">
                  Opzioni relative all&apos;Informativa sulla privacy (Stato
                  della California)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="text-secondary mb-2">
            Opzioni per gli annunci pubblicitari
          </Col>
          <Col className="text-secondary mb-2"> Pubblicità </Col>
          <Col className="text-secondary mb-2"> Sales Solutions </Col>
          <Col className="text-secondary mb-2"> Mobile </Col>
          <Col className="text-secondary mb-2"> Piccole imprese </Col>
          <Col className="text-secondary mb-2"> Centro sicurezza </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="d-flex">
              <div>
                <QuestionCircleFill className="me-1 fs-5" />
                <span className="fs-6 fw-bold text-secondary">Domande?</span>
                <br />
                <span className="fs-6 fw-light ms-4">
                  Visita il nostro Centro assistenza.
                </span>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="d-flex">
              <div>
                <GearFill className="me-1 fs-5" />
                <span className="fs-6 fw-bold text-secondary">
                  Gestisci il tuo account e la tua privacy
                </span>
                <br />
                <span className="fs-6 fw-light ms-4">
                  Vai alle impostazioni <ArrowRight />
                </span>
              </div>
            </div>
          </Col>
          <Col md={12}>
            <div className="d-flex">
              <div>
                <ShieldShaded className="me-1 fs-5" />
                <span className="fs-6 fw-bold text-secondary">
                  Trasparenza sui contenuti consigliati
                </span>
                <br />
                <span className="fs-6 fw-light ms-4">
                  Scopri di più sui contenuti consigliati.
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row md={1}>
          <Col md={12}>
            <label>Seleziona lingua</label>
            <Form.Select
              id="form-lang"
              className="text-secondary border-dark border-1"
              aria-label="Seleziona lingua"
            >
              <option>Italiano </option>
              <option value="1">Inglese (britannico)</option>
              <option value="2">Francese</option>
              <option value="3">Polacco</option>
              <option value="3">Svedese</option>
              <option value="3">Arabo</option>
              <option value="3">Tedesco</option>
              <option value="3">Inglese (Americano)</option>
              <option value="3">Senegalese</option>
              <option value="3">Swaili</option>
              <option value="3">Nigeriano</option>
              <option value="3">Filippino</option>
              <option value="3">Pakistano</option>
              <option value="3">Tunisino</option>
              <option value="3">Mandarino (cinese)</option>
              <option value="3">Cinese semplificato</option>
              <option value="3">Giapponese</option>
              <option value="3">Koreano</option>
              <option value="3">Egiziano</option>
              <option value="3">Latino</option>
              <option value="3">Greco</option>
              <option value="3">Inglese (canadese)</option>
              <option value="3">inglese (australiano)</option>
              <option value="3">Colombiano</option>
              <option value="3">Peruviano</option>
              <option value="3">Spagnolo (spagna)</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="text-secondary fw-light mt-4">
          LinkedIn Corporation © 2024
        </p>
      </Container>
    </>
  );
};
export default MyFooter;
