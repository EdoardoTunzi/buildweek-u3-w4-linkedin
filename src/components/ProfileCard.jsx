import { Button, Card, Row, Col, Modal, Form } from "react-bootstrap";
import { Pencil, ShieldCheck } from "react-bootstrap-icons";
import { useState } from "react";
import img from "../assets/imgs/backImage.png";
import { useDispatch, useSelector } from "react-redux";

const ProfileCard = () => {
  const [update, setUpdate] = useState(false);
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { name, surname, email, username, job, description, area, image } = user;
  const fullName = name + " " + surname;

  let onChangeName = "";
  let onchangeSurname = "";
  let onchangeUsername = "";
  let onchangeDescription = "";
  let onchangeArea = "";
  let onchangeJob = "";

  const handleSubmit = async () => {
    if (
      onChangeName.length > 0 &&
      onchangeSurname.length > 0 &&
      onchangeUsername.length > 0 &&
      onchangeDescription.length > 0 &&
      onchangeArea.length > 0 &&
      onchangeJob.length > 0
    ) {
      console.log("changing states");
      const modUser = {
        _id: user._id,
        name: onChangeName,
        surname: onchangeSurname,
        email: email,
        username: onchangeUsername,
        title: onchangeJob,
        bio: onchangeDescription,
        area: onchangeArea,
        image: image
      };
      console.log(modUser);

      dispatch({ type: "MOD_USER", payload: modUser });
      setError(false);
      handleShow();
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
          },
          body: JSON.stringify(modUser)
        });
        if (response.ok) {
          handleShow();
          setUpdate(!update);
          dispatch({ type: "RENDER_COMPONENTS" });
        } else {
          console.log("errore nella fetch put,", response.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("errore nel changing");

      setError(true);
    }
  };
  const postImage = async () => {
    if (!file) {
      console.log("Nessun file selezionato");
      return;
    }

    const img = new FormData();
    img.append("profile", file); // Aggiungi il file al FormData
    console.log(img);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
        },
        body: img
      });

      if (response.ok) {
        console.log(response);

        console.log("Immagine caricata con successo");
        dispatch({ type: "RENDER_COMPONENTS" });
        handleShow();
        setUpdate(!update);
      } else {
        console.log("Errore nel caricamento dell'immagine:", response.statusText);
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  return (
    <>
      {user && (
        <div>
          <Card>
            <Card.Img variant="top" src={img} style={{ height: "200px" }} />
            <Card.Body className="ms-2">
              <Row style={{ marginTop: "-100px" }} className="d-flex align-items-end ">
                <Col xs={11} className="">
                  <img style={{ height: "150px", width: "150px" }} src={image} className="rounded-circle border border-3 border-white" />
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
                    <Card.Title className="fs-2 d-inline-block mb-2">{fullName}</Card.Title>

                    <a href="#" className="ms-2 rounded-pill borderDotted px-2 py-1 text-decoration-none">
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
                <Button style={{ width: "15%" }} className="d-inline-block bg-primary text-light rounded-pill me-2">
                  Disponibile per
                </Button>
                <Button style={{ width: "30%" }} className="d-inline-block bg-white  text-primary border border-1 border-primary rounded-pill me-2">
                  <b>Aggiungi sezione del profilo</b>
                </Button>
                <Button style={{ width: "20%" }} className="d-inline-block bg-white text-primary border border-1 border-primary rounded-pill me-2">
                  <b>Migliora profilo</b>
                </Button>
                <Button style={{ width: "15%" }} className="d-inline-block bg-white text-dark border border-1 border-black rounded-pill">
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
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Carica un&apos;immagine</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]); // Salva il file selezionato
                    }}
                  />
                  <Button onClick={postImage}>Carica immagine</Button>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {error == true && <p className="text-danger">Tutti i campi obbligatori devono essere riempiti</p>}
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
        </div>
      )}
    </>
  );
};

export default ProfileCard;
