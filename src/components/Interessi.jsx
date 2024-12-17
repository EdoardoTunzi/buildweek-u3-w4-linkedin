import { Button, Container, Nav } from "react-bootstrap";
import { ArrowRight, Check } from "react-bootstrap-icons";

const Interessi = () => {
  return (
    <Container className="bg-white border rounded-3 mt-2 px-3">
      <h4 className="mt-3">Interessi</h4>
      <Nav variant="underline">
        <Nav.Item>
          <Nav.Link className="text-success nav-link active">Aziende</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary">Top Voices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary">Newsletter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary">Gruppi</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="border-top d-flex pt-3 mb-3">
        <div className="d-flex pe-5 me-5">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1742428800&v=beta&t=Q0pk5MId1Y-LOAr74F66g0YQ6NsfOE1su1u4IOtEJus"
            alt=""
            width={60}
            height={60}
          />
          <div>
            <p className="m-0 fs-5 fw-semibold">Google</p>
            <p className="mb-2 text-secondary">35.183.572 followers</p>
            <Button className="text-dark bg-white rounded-pill border-black fw-semibold py-1 px-3 d-flex">
              <Check className="fs-4 me-1 text-black" />
              Gia segui
            </Button>
          </div>
        </div>
        <div className="d-flex ms-5 ps-5">
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1742428800&v=beta&t=XEwJG6bTPE6HLwRXFSQdped_5Qq3MM3z8S_Zn7adtU0"
            alt=""
            width={60}
            height={60}
          />
          <div>
            <p className="m-0 fs-5 fw-semibold">IBM</p>
            <p className="mb-2 text-secondary">17.668.63 followers</p>
            <Button className="text-dark bg-white rounded-pill border-black fw-semibold py-1 px-3 d-flex">
              <Check className="fs-4 me-1 text-black" />
              Gia segui
            </Button>
          </div>
        </div>
      </div>

      <Button className="btn border-0 border-top fw-semibold text-dark bg-white w-100 px-0 mt-1">
        Mostra tutte le aziende <ArrowRight className="fw-bold" />
      </Button>
    </Container>
  );
};
export default Interessi;
