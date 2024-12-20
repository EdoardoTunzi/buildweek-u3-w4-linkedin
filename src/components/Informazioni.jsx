import { Container, Row, Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
const Informazioni = () => {
  const _id = useSelector((state) => state.user._id);
  return (
    <Container className="border border-1 rounded-2 mt-2 bg-white ">
      <div className="d-flex align-items-center justify-content-between p-2">
        <h4 className="mb-0">Informazioni</h4>
        {_id === "675ff3db0ea286001528b941" && (
          <p className="fs-5 m-0">
            <Pencil />
          </p>
        )}
      </div>
      <Row className="mt-2 align-items-end">
        <Col xs={10}>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>

            <li>React</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Informazioni;
