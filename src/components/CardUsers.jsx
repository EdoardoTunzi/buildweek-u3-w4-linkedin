import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const CardUsers = () => {
  const [firstArrUsers, setfirstArrUsers] = useState([]);
  const [SecondArrUsers, setSecondArrUsers] = useState([]);
  const dispatch = useDispatch();
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNlOTBlYTI4NjAwMTUyOGI5NDMiLCJpYXQiOjE3MzQzNDE2MDksImV4cCI6MTczNTU1MTIwOX0.KgjoM4alFntSS9veo-2FQ3kPVGiGRk5bFqvpuq4tifs";

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Errore nel reperimento dei dati!");
      })
      .then((arrfirstArrUsers) => {
        const firstArrUsers = arrfirstArrUsers.slice(6, 12);
        setfirstArrUsers(firstArrUsers);
      })
      .catch((error) => {
        console.error("C'è stato un problema con la fetch:", error);
      });

    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Errore nel reperimento dei dati!");
      })
      .then((arrfirstArrUsers) => {
        const secondArrfirstArrUsers = arrfirstArrUsers.slice(64, 70);
        setSecondArrUsers(secondArrfirstArrUsers);
      })
      .catch((error) => {
        console.error("C'è stato un problema con la fetch:", error);
      });
  }, []);

  return (
    <Container className="mt-2">
      <Row
        md={1}
        className="d-flex flex-column border border-1 rounded-3 bg-white "
      >
        <div className="px-3">
          <h5 className="fs-5 mt-3 mb-0">Altri profili per te</h5>
          {firstArrUsers.map((user, index) => (
            <Col
              md={12}
              key={index}
              className={`ms-1 ${index !== 5 ? "border-bottom" : ""}`}
              onClick={() => {
                dispatch({ type: "MOD_USER", payload: user });
              }}
            >
              <Card className="d-flex flex-row border-0">
                <div
                  className="rounded-circle overflow-hidden mt-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  <img src={user.image} className="img-fluid" alt="" />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between fs-6 fw-light">
                  <Card.Title className="fs-6 mb-0 fw-bold">
                    {user.name} {user.surname}
                  </Card.Title>
                  <Card.Text>{user.title}</Card.Text>
                  <div className="d-flex">
                    <Button className="primary  rounded-pill text-primary bg-light px-3 py-1">
                      Messaggio
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
        <Button className="btn border-0 border-top fw-semibold text-dark bg-white">
          Mostra tutto
        </Button>
      </Row>
      <br />
      <Row
        md={1}
        className="d-flex flex-column border border-1 rounded-3 bg-white"
      >
        <div>
          <h5 className="fs-5 mt-3 mb-0">Persone che potresti conoscere </h5>
          <span>Dalla tua azienda</span>
          {SecondArrUsers.map((user, index) => (
            <Col
              md={12}
              key={index}
              className={`ms-1 ${index !== 5 ? "border-bottom" : ""}`}
              onClick={() => {
                dispatch({ type: "MOD_USER", payload: user });
              }}
            >
              <Card className="d-flex flex-row border-0">
                <div
                  className="rounded-circle overflow-hidden mt-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  <img src={user.image} className="img-fluid" alt="" />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fs-6 fw-bold">
                    {user.name} {user.surname}
                  </Card.Title>
                  <Card.Text>{user.title}</Card.Text>
                  <div className="d-flex">
                    <Button className="btn btn-outline-dark text-bg-light rounded-pill py-1">
                      <div className="d-flex align-items-center">
                        <PersonPlusFill className="me-2" />
                        <p className="m-0">Collegati</p>
                      </div>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
        <Button className="btn border-0 border-top fw-semibold text-dark bg-white">
          Mostra tutto
        </Button>
      </Row>
    </Container>
  );
};

export default CardUsers;
