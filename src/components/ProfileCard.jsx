import { Button, Card, Row, Col, Modal, Form } from "react-bootstrap";
import { Pencil, ShieldCheck } from "react-bootstrap-icons";
import { useState } from "react";
import img from "../assets/imgs/backImage.png";

const ProfileCard = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const [name, setname] = useState("Davide");
  const [surname, setsurname] = useState("Alonzi");
  const fullName = name + " " + surname;

  const [username, setusername] = useState("notdav04");
  const [description, setdesciption] = useState(".........");
  const [area, setarea] = useState("Sora");
  const [job, setjob] = useState("web developer");
  const [error, setError] = useState(false);
  let onChangeName = "";
  let onchangeSurname = "";
  let onchangeUsername = "";
  let onchangeDescription = "";
  let onchangeArea = "";
  let onchangeJob = "";

  const handleSubmit = () => {
    if (
      onChangeName.length > 0 &&
      onchangeSurname.length > 0 &&
      onchangeUsername.length > 0 &&
      onchangeDescription.length > 0 &&
      onchangeArea.length > 0 &&
      onchangeJob.length > 0
    ) {
      console.log("changing states");
      setname(onChangeName);
      setsurname(onchangeSurname);
      setusername(onchangeUsername);
      setdesciption(onchangeDescription);
      setarea(onchangeArea);
      setjob(onchangeJob);
      setError(false);
      handleShow();
    } else {
      console.log("errore nel changing");

      setError(true);
    }
  };

  return (
    <>
      <Card style={{ width: "50%" }}>
        <Card.Img variant="top" src={img} style={{ height: "200px" }} />
        <Card.Body className="ms-2">
          <Row
            style={{ marginTop: "-100px" }}
            className="d-flex align-items-end "
          >
            <Col xs={11} className="">
              <img
                style={{ height: "150px", width: "150px" }}
                src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                className="rounded-circle border border-3 border-white"
              />
            </Col>
            <Col xs={1}>
              <Button
                onClick={() => {
                  handleShow();
                }}
                variant="outline-none"
                className="bg-white text-black fs-3 rounded-circle  "
              >
                <Pencil />
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={8}>
              <div className="d-flex align-items-center">
                <Card.Title className="fs-2 d-inline-block mb-2">
                  {fullName}
                </Card.Title>

                <a
                  href="#"
                  className="ms-2 rounded-pill borderDotted px-2 py-1 text-decoration-none"
                >
                  <ShieldCheck /> Aggiungi badge di verifica
                </a>
              </div>
              <Card.Text>
                <span>{description}</span>
                <span className=" d-block mb-3">
                  {area} -{" "}
                  <a className="text-decoration-none" href="#">
                    Informazioni di contato
                  </a>
                </span>
                <span className="mb-2 d-block">
                  <a className="text-decoration-none" href="#">
                    {Math.floor(Math.random() * 100)} collegamenti
                  </a>
                </span>
              </Card.Text>
            </Col>
            <Col xs={4}>
              <div className="d-flex mt-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdP-8lUig3HoE9oIm0d4uHFet2vwyGEaBlJQ&s"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
                <p className="ms-1">{job}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Button
              style={{ width: "15%" }}
              className="d-inline-block bg-primary text-light rounded-pill me-2"
            >
              Disponibile per
            </Button>
            <Button
              style={{ width: "30%" }}
              className="d-inline-block bg-white  text-primary border border-1 border-primary rounded-pill me-2"
            >
              <b>Aggiungi sezione del profilo</b>
            </Button>
            <Button
              style={{ width: "20%" }}
              className="d-inline-block bg-white text-primary border border-1 border-primary rounded-pill me-2"
            >
              <b>Migliora profilo</b>
            </Button>
            <Button
              style={{ width: "15%" }}
              className="d-inline-block bg-white text-dark border border-1 border-black rounded-pill"
            >
              Risorse
            </Button>
          </Row>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={() => {
          handleShow();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> * indica che è un campo obbligatorio</p>
          <Form
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                onChange={(e) => {
                  onChangeName = e.target.value;
                }}
                type="text"
                placeholder={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                onChange={(e) => {
                  onchangeSurname = e.target.value;
                }}
                type="text"
                placeholder={surname}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => {
                  onchangeUsername = e.target.value;
                }}
                type="text"
                placeholder={username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                onChange={(e) => {
                  onchangeDescription = e.target.value;
                }}
                type="text"
                placeholder={description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area</Form.Label>
              <Form.Control
                onChange={(e) => {
                  onchangeArea = e.target.value;
                }}
                type="text"
                placeholder={area}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Job</Form.Label>
              <Form.Control
                onChange={(e) => {
                  onchangeJob = e.target.value;
                }}
                type="text"
                placeholder={job}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {error == true && (
            <p className="text-danger">
              Tutti i campi obbligatori devono essere riempiti
            </p>
          )}
          <Button
            variant="primary"
            className="rounded-pill px-3"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileCard;
