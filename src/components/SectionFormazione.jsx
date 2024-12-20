import { Col, Container, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const SectionFormazione = () => {
  const _id = useSelector((state) => state.user._id);
  return (
    <Container className="bg-white mt-2">
      <Row className="flex-column border rounded-2 p-3 mb-1">
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Formazione</h4>
          {_id === "675ff3db0ea286001528b941" && (
            <div>
              <Plus className="fs-1 me-2" />
              <Pencil className="fs-5" />
            </div>
          )}
        </div>
        <Col>
          <div className="d-flex border-bottom mt-3">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQGzzeiVGDWpkA/company-logo_100_100/company-logo_100_100/0/1631343804516?e=1742428800&amp;v=beta&amp;t=414sPvT5UcQ86uPNufh_ajLgp7E1fbiF6t8eA_QgjXY"
              alt="Logo di Università degli Studi del Piemonte Orientale"
              width={60}
              height={60}
            />
            <div className="d-flex flex-column ms-3">
              <h5 className="fs-6">Università del Piemonete orientale</h5>
              <p>Laurea breve,Ingegneria gestionale</p>
              <p>lug 2021 - feb 2024</p>
              <p className="fw-light">votazione: 92/110</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className="d-flex mt-3">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQEzSGBOHm0JcQ/company-logo_100_100/company-logo_100_100/0/1630627123935?e=1742428800&amp;v=beta&amp;t=oXaTl0-8XwN5hclcuq3mxnxDCRbuokZ3eP4aplqcUO0"
              alt="Logo di Mindfulness Educators"
              height={60}
              width={60}
            />
            <div className="d-flex flex-column ms-3">
              <h5 className="fs-6">Mindfulness Educators</h5>
              <p>Facilitatore Mindfulness-(scuola preparatoria)</p>
              <p>set 2009 - giu 2016</p>
              <p className="fw-light">votazione: 67/100</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionFormazione;
