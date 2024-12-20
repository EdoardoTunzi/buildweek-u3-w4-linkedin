import { Container, Row, Button } from "react-bootstrap";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
const Attivita = () => {
  const _id = useSelector((state) => state.user._id);
  return (
    <Container className="border border-1 rounded-2 mt-2 bg-white ">
      <Row className="p-3">
        <div className="d-flex justify-content-between ">
          <div>
            <h2 className="mb-0">Attività</h2>
            <p className="text-primary fw-semibold">
              {Math.floor(Math.random() * 100)} follower
            </p>
          </div>
          {_id === "675ff3db0ea286001528b941" && (
            <div>
              <Button className="bg-white text-primary d-inline-block rounded-pill fw-semibold">
                Crea un post
              </Button>
              <p className="ms-3 d-inline-block fs-4">
                <Pencil />
              </p>
            </div>
          )}
        </div>
        <div>
          <p className="fw-bold m-0">
            Non h{_id === "675ff3db0ea286001528b941" ? "ai" : "a"} ancora
            pubblicato nulla
          </p>
          <p>
            I post che condivid{_id === "675ff3db0ea286001528b941" ? "i" : "e"}{" "}
            appariranno qui
          </p>
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
