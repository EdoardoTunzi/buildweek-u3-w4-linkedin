import { Button, Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, ListUl, PencilSquare } from "react-bootstrap-icons";

const LeftAsideHome = () => {
  return (
    <Container className="px-4">
      <Row className="flex-column rounded-3 mt-2 bg-white">
        <Col className=" border rounded-3">
          <div className="py-4 px-2">
            <p className="text-dark fw-semibold text-decoration-none">
              <ListUl className="me-1" /> Preferenze
            </p>
            <div className="d-flex justify-content-between align-items-baseline">
              <p className="fw-semibold text-dark mt-3 mb-0 text-decoration-none">
                <BookmarkFill className="me-1" /> Le mie offerte
              </p>
            </div>
          </div>
        </Col>
      
      </Row>
          <Button className="text-primary bg-light rounded-pill ms-1 mt-2 px-4">
            <div className="fw-semibold d-flex justify-content-center align-items-center">
              <PencilSquare className="fs-6 me-1" />
              <span>Pubblica offerta gratuita</span>
            </div>
          </Button>
    </Container>
  );
};
export default LeftAsideHome;
