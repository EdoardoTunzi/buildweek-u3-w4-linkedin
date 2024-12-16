import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const MyNavBar = () => {
  return (
    <Navbar className="bg-body-white border-bottom p-0">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
            width="35"
            height="35"
            className="d-inline-block align-top me-3"
          />
          <Form inline className="me-5">
            <InputGroup>
              <InputGroup.Text id="search-field" className="bg-searchbar">
                {" "}
                <Search />
              </InputGroup.Text>
              <Form.Control placeholder="Cerca" aria-label="search" className="bg-searchbar" />
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
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
