import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { Grid3x3GapFill, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MyNavBar = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const render = useSelector((state) => state.render);
  const [me, setMe] = useState(null);

  const fetchUser = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
          }
        }
      );
      if (response.ok) {
        let user = await response.json();
        if (user) {
          console.log(user);
          dispatch({ type: "ADD_TO_USER", payload: user });
          setMe(user);
        } else {
          console.log("Error: data not found");
        }
      } else {
        throw new Error("Error in fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  return (
    <Navbar className="bg-body-white border-bottom p-0 bg-white sticky-top">
      <Container className="justify-content-start">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Link to={"/"}>
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055"
              width="35"
              height="35"
              className="d-inline-block align-top me-2"
            />
          </Link>
          <Form style={{ display: "inline" }} className="me-5">
            <InputGroup id="search-bar">
              <InputGroup.Text id="search-field" className="bg-searchbar">
                {" "}
                <Search className="fw-bold" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Cerca"
                aria-label="search"
                className="bg-searchbar "
              />
            </InputGroup>
          </Form>
          <Nav className="me-auto ">
            <Nav.Link href={"/"} className="p-0 mx-5">
              <div
                className=" text-center"
                onClick={() => {
                  dispatch({ type: "ADD_TO_USER", payload: me });
                }}
              >
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
            <Nav.Link href={"/jobs"} className="p-0 me-3">
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
        <div className=" text-secondary px-4 border-end">
          <img
            src={
              me?.image ||
              "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            }
            alt=""
            width={32}
            className="rounded-circle"
          />
          <NavDropdown
            title="Tu"
            id="profile-nav-dropdown"
            align="end"
            className="fs-7 text-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={
                  me?.image ||
                  "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                }
                className="rounded-circle ms-2 mb-2 me-2"
                width={70}
                height={70}
              />
              <p>{me && me.name + " " + me.surname}</p>
            </div>
            <div className="d-flex border-bottom pb-2 ">
              <Button
                onClick={() => {
                  navigate("/profile");
                  dispatch({ type: "ADD_TO_USER", payload: me });
                }}
                className="btn bg-white text-primary border border-1 border-primary rounded-4 ms-2 me-2 py-0 px-4 fw-semibold"
              >
                Visualizza <br />
                profilo
              </Button>
              <Button className=" btn bg-primary text-light rounded-4 me-2 py-0 px-5 pb-4 fw-semibold">
                Verifica
              </Button>
            </div>
            <p className="fw-semibold ps-3 pt-2 mb-1 fs-5">Account</p>
            <div className="d-flex align-items-start">
              <img
                src="/src/assets/img/dropdownIcon.png"
                alt="box-icon"
                className="rounded-2 mt-1 ms-3 me-1"
                width={20}
              />
              <NavDropdown.Item
                href="#action/3.1"
                className="fw-semibold p-0 text-secondary"
              >
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

        <div className="text-center text-secondary ms-2">
          <Grid3x3GapFill className="fs-4 " />
          <NavDropdown
            title="Per le aziende"
            id="second-nav-dropdown"
            align="end"
            className="fs-7 text-center mt-1 mx-2"
          >
            <Container className="d-flex p-4 pb-5">
              {/* menu sinistra */}
              <div className="ps-3 pe-5 border-end">
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-5 ">
                  Le mie app
                </NavDropdown.Item>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-sales-navigator-@1-a"
                        x1="40.53"
                        y1="-53.4"
                        x2="20.23"
                        y2="19.17"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <circle
                      cx="20"
                      cy="20"
                      r="14"
                      fill="url(#app-sales-navigator-@1-a)"
                    ></circle>
                    <path
                      d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                      fill="#98d8f4"
                    ></path>
                    <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                    <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                  </svg>
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Vendi
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-groups-@1-b"
                        x1="1.84"
                        y1="-24.59"
                        x2="20.66"
                        y2="25.05"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#0073b1"></stop>
                        <stop offset="0" stopColor="#665ed0"></stop>
                      </linearGradient>
                      <clipPath id="app-groups-@1-a">
                        <path
                          d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                          fill="none"
                        ></path>
                      </clipPath>
                    </defs>
                    <path
                      d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                      fill="#caedff"
                    ></path>
                    <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                    <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                    <g clipPath="url(#app-groups-@1-a)">
                      <path
                        d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                        fill="url(#app-groups-@1-b)"
                      ></path>
                      <path
                        fill="#0091ca"
                        d="M26 21h6v14h-6zM8 21h6v14H8z"
                      ></path>
                    </g>
                  </svg>{" "}
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Gruppi
                  </NavDropdown.Item>
                </div>

                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">
                  Talent
                </NavDropdown.Item>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-talent-insights-medium-a"
                        x1="34.05"
                        y1="44.47"
                        x2="13.67"
                        y2="19.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                      fill="#caedff"
                    ></path>
                    <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                    <path
                      d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                      fill="url(#app-talent-insights-medium-a)"
                    ></path>
                  </svg>{" "}
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Talent Insights
                  </NavDropdown.Item>
                </div>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-jobs-posting-@1-a"
                        x1="-6.68"
                        y1="-1"
                        x2="25.05"
                        y2="26.36"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="none"
                      stroke="#caedff"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                    ></path>
                    <rect
                      x="8"
                      y="14"
                      width="24"
                      height="16"
                      rx="1"
                      ry="1"
                      fill="url(#app-jobs-posting-@1-a)"
                    ></rect>
                    <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                    <path fill="#33aada" d="M15 23h10v3H15z"></path>
                    <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                  </svg>{" "}
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Pubblicizza un&apos; offerta di lavoro
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">
                  Vendite
                </NavDropdown.Item>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                    <path
                      d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                      fill="#0091ca"
                    ></path>
                    <path
                      d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                      fill="#33aada"
                      opacity=".8"
                    ></path>
                    <path
                      fill="#0073b1"
                      d="M19 26.34l4-4V18h-6v6.34l2 2z"
                    ></path>
                  </svg>{" "}
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Marketplace dei servizi
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">
                  Marketing
                </NavDropdown.Item>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-ads-@1-a"
                        x1="34.78"
                        y1="3.84"
                        x2="14.66"
                        y2="25.84"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="url(#app-ads-@1-a)">
                      <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                      <circle cx="20" cy="20" r="4"></circle>
                    </g>
                    <circle
                      cx="20"
                      cy="20"
                      r="2"
                      transform="rotate(-45 20.002 19.995)"
                      fill="#33aada"
                    ></circle>
                    <path
                      fill="#33aada"
                      d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                    ></path>
                    <path
                      fill="#33aada"
                      d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                    ></path>
                  </svg>{" "}
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Pubblicizza
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-6 text-secondary ">
                  Learning
                </NavDropdown.Item>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="50"
                    height="50"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-learning-@1-a"
                        x1="7.18"
                        y1="6.98"
                        x2="13.8"
                        y2="20.22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#33aada"></stop>
                        <stop offset="1" stopColor="#0091ca"></stop>
                      </linearGradient>
                      <linearGradient
                        id="app-learning-@1-b"
                        x1="12.96"
                        y1="-17.55"
                        x2="27.9"
                        y2="24.33"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                      fill="url(#app-learning-@1-a)"
                    ></path>
                    <path
                      d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                      fill="url(#app-learning-@1-b)"
                    ></path>
                    <path
                      fill="#33aada"
                      d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                    ></path>
                    <path
                      fill="#006097"
                      d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                    ></path>
                    <path
                      d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                      fill="#fff"
                    ></path>
                  </svg>{" "}
                  <NavDropdown.Item href="#" className="fw-semibold p-0 ps-3">
                    Learning
                  </NavDropdown.Item>
                </div>
              </div>
              {/* menù destra */}
              <div className="px-4">
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 fs-5 ">
                  Scopri altro per il business
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">
                      Assumi su LinkedIn
                    </p>
                    <p className="text-secondary">Trova, attrai e assumi</p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">
                      Vendi con Linkedin
                    </p>
                    <p className="text-secondary">
                      Sbloocca nuove opportunità di vendita
                    </p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">
                      Offerta di lavoro gratuita
                    </p>
                    <p className="text-secondary">
                      Ottieni rapidamente candidati qualficati
                    </p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-3">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">
                      Fai pubblicità su Linkedin
                    </p>
                    <p className="text-secondary">
                      Acquisisci clienti e fai crescere la tua azienda
                    </p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-3">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">
                      Inizia con Premium
                    </p>
                    <p className="text-secondary">
                      Amplia e sfrutta la tua rete
                    </p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Impara LinkedIn</p>
                    <p className="text-secondary">
                      Corsi per formare i tuoi dipendenti
                    </p>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="#" className="mb-1">
                  <div>
                    <p className="m-0 text-tertiary fw-bold">Admin Center</p>
                    <p className="text-secondary">
                      Gestisci i dettagli di fatturazione e account
                    </p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item className="fw-semibold ps-3 pt-2 mb-4 ">
                  Crea un apagina aziendale <span className="fs-4">+</span>
                </NavDropdown.Item>
              </div>
            </Container>
          </NavDropdown>
        </div>
        <Nav.Link href="#" className="px-3 link-premium fs-7 text-center">
          {" "}
          Prova Premium per 0 <br /> EUR
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
