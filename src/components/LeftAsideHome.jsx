import { Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, PersonPlusFill, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import image from "../assets/imgs/backImage.png";
const LeftAsideHome = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user && (
        <Container>
          <Row md={2} className="mt-2 bg-white rounded-3 border rounded-3">
            <Col md={12} className="p-0">
              <img src={image} className="h-75 w-100 rounded-top-2" alt="" />
            </Col>
            <Col md={12} style={{ marginTop: "-80px" }} className="flex-column ">
              <Col md={12} className="text-center">
                <img src={user.image} width={100} height={100} alt="" className="my-4 rounded-circle border border-2 border-white" />
              </Col>
              <Col md={12} className="text-center">
                <a href="#userprofile" className="text-decoration-none fw-semibold text-dark fs-5">
                  {user.name + " " + user.surname}
                </a>
                <p className="text-secondary mb-1">{user.title}</p>
                <p className="text-secondary">{user.bio}</p>
              </Col>
              <hr />
              <Col md={12}>
                <div className="d-flex justify-content-between pt-2 align-items-baseline">
                  <div>
                    <p className="my-0 text-secondary">Collegamenti</p>
                    <p className="fw-semibold">Espandi la tua rete</p>
                  </div>
                  <PersonPlusFill />
                </div>
              </Col>
              <hr />
              <Col md={12} className="">
                <div>
                  <p className="text-secondary">Accedi a strumenti e informazioni in esclusiva</p>
                  <div className="d-flex align-items-baseline">
                    <img src="/src/assets/img/dropdownIcon.png" alt="box-icon" className="rounded-2" width={20} />

                    <p className="ms-2 fw-semibold">Prova premium gratis</p>
                  </div>
                </div>
              </Col>
              <hr />
              <Col md={12} className="border-bottom">
                <div className="d-flex">
                  <div>
                    <BookmarkFill className="text-secondary" />
                  </div>
                  <p className="ms-2 fw-semibold">Elementi salvati</p>
                </div>
              </Col>
            </Col>
          </Row>

          <Row className="flex-column mt-2 bg-white rounded-3">
            <Col className="flex-column border rounded-3">
              <div className="mt-2">
                <a href="#gruppi" className="text-primary fw-semibold text-decoration-none">
                  Gruppi
                </a>
                <div className="d-flex justify-content-between align-items-baseline">
                  <a href="#eventi" className="fw-semibold text-primary mt-3 mb-0 text-decoration-none">
                    Eventi
                  </a>
                  <PlusLg className="text-dark fs-5" />
                </div>
              </div>
              <hr />
              <p className="text-center fw-demibold">Scopri di più</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default LeftAsideHome;
