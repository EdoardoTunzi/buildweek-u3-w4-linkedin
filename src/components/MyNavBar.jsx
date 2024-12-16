import { Button, Container, Form, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Grid3x3GapFill, Search } from "react-bootstrap-icons";

const MyNavBar = () => {
  return (
    <Navbar className="bg-body-white border-bottom p-0">
      <Container className="justify-content-start">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
            width="35"
            height="35"
            className="d-inline-block align-top me-2"
          />
          <Form inline className="me-5">
            <InputGroup>
              <InputGroup.Text id="search-field" className="bg-searchbar">
                {" "}
                <Search className="fw-bold" />
              </InputGroup.Text>
              <Form.Control placeholder="Cerca" aria-label="search" className="bg-searchbar search-bar" />
            </InputGroup>
          </Form>
          <Nav className="me-auto ">
            <Nav.Link href="#home" className="p-0 mx-5">
              <div className=" text-center">
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
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                </svg>
                <p className="m-0 fs-7">Home</p>
              </div>
            </Nav.Link>
            <Nav.Link href="#features" className="p-0 me-5">
              {" "}
              <div className=" text-center">
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
                <p className="m-0 fs-7">Rete</p>
              </div>
            </Nav.Link>
            <Nav.Link href="#pricing" className="p-0 me-3">
              <div className=" text-center">
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
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <p className="m-0 fs-7">Lavoro</p>
              </div>
            </Nav.Link>
            <Nav.Link href="#pricing" className="p-0 me-3">
              <div className=" text-center">
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
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <p className="m-0 fs-7">Messaggistica</p>
              </div>
            </Nav.Link>
            <Nav.Link href="#pricing" className="p-0">
              <div className=" text-center p-0">
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
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <p className="m-0 fs-7">Notifiche</p>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
        <div className=" text-secondary">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt=""
            width={40}
            className="rounded-circle"
          />
          <NavDropdown title="Tu" id="profile-nav-dropdown" align="end">
            <div className="d-flex align-items-center">
              <img
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                className="rounded-circle"
                width={70}
                height={70}
              />
              <p>Nome Cognome</p>
            </div>
            <div className="d-flex border-bottom pb-2 ">
              <Button className="btn bg-white text-primary border border-1 border-primary rounded-4 ms-2 me-2 py-0 px-4 fw-semibold">
                Visualizza <br />
                profilo
              </Button>
              <Button className=" btn bg-primary text-light rounded-4 me-2 py-0 px-5 pb-4 fw-semibold">Verifica</Button>
            </div>
            <p className="fw-semibold ps-3 pt-2 mb-1 fs-5">Account</p>
            <div className="d-flex align-items-start">
              <img src="/src/assets/img/dropdownIcon.png" alt="box-icon" className="rounded-2 mt-1 ms-3 me-1" width={20} />
              <NavDropdown.Item href="#action/3.1" className="fw-semibold p-0 text-secondary">
                Prova 1 mese di Premium per 0 <br />
                EUR
              </NavDropdown.Item>
            </div>
            <NavDropdown.Item href="#" className="text-secondary">
              Impostazioni e privacy
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="text-secondary">
              Guida
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="text-secondary">
              Lingua
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <p className="fw-semibold ps-3 pt-2 mb-1 fs-5">Gestisci</p>
            <NavDropdown.Item href="#" className="text-secondary">
              Post e attività
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="text-secondary">
              Account per la pubblicazione di of...
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="" className="text-secondary">
              Esci
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="text-center text-secondary">
          <Grid3x3GapFill className="fs-4 " />
          <NavDropdown title="Per le aziende" id="second-nav-dropdown" align="end">
            <Container className="d-flex p-4 pb-5">
              {/* menu sinistra */}
              <div className="ps-3 pe-5 border-end">
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-5 ">Le mie app</NavDropdown.Item>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Vendi
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Gruppi
                  </NavDropdown.Item>
                </div>

                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">Talent</NavDropdown.Item>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Talent Insights
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Pubblicizza un&apos; offerta di lavoro
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">Vendite</NavDropdown.Item>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Market dei servizi
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">Marketing</NavDropdown.Item>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Pubblicizza
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">Learning</NavDropdown.Item>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <img src="https://cdn-icons-png.flaticon.com/128/14026/14026853.png" alt="" className="" width={30} height={30} />
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Learning
                  </NavDropdown.Item>
                </div>
              </div>
              {/* menù destra */}
              <div className="px-4">
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-5 ">Scopri altro per il business</NavDropdown.Item>
                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Assumi su LinkedIn</p>
                    <p className="text-secondary">Trova, attrai e assumi</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Vendi con Linkedin</p>
                    <p className="text-secondary">Sbloocca nuove opportunità di vendita</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Offerta di lavoro gratuita</p>
                    <p className="text-secondary">Ottieni rapidamente candidati qualficati</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-3">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Fai pubblicità su Linkedin</p>
                    <p className="text-secondary">Acquisisci clienti e fai crescere la tua azienda</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-3">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Inizia con Premium</p>
                    <p className="text-secondary">Amplia e sfrutta la tua rete</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Impara LinkedIn</p>
                    <p className="text-secondary">Corsi per formare i tuoi dipendenti</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Admin Center</p>
                    <p className="text-secondary">Gestisci i dettagli di fatturazione e account</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 ">
                  Crea un apagina aziendale <span className="fs-4">+</span>
                </NavDropdown.Item>
              </div>
            </Container>

            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
