import { Accordion, Container } from "react-bootstrap";
import { BriefcaseFill, GlobeEuropeAfrica } from "react-bootstrap-icons";

const CardsJobs = ({ job }) => {
  return (
    <Container>
      <div className="d-flex border-bottom">
        <div className="flex-shrink-1 mt-4 ms-4">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/1svkhjtd476ns0r6daqolu2xk"
            width={60}
            height={60}
          />
        </div>
        <div className="p-4 w-100">
          <h5>{job.title}</h5>
          <p className="mb-0 fw-light text-dark"><strong>Company:</strong>{" "}{job.company_name}</p>
          <p className="mb-0 fw-light text-dark">
            <strong> Data di pubblicazione:</strong>{" "}
            {job.publication_date
              .toLocaleString()
              .slice(0, job.publication_date.indexOf("T"))}
          </p>
          <p className="mb-0 fw-light text-dark">
           <GlobeEuropeAfrica/> {job.candidate_required_location} {" "} {job.job_type ?<BriefcaseFill/> : ""} {job.job_type}
          </p>
          <p className="mb-0 fw-light text-dark">{job.Category}</p>
          <p className="mb-0 fw-light text-dark"></p>

          <Accordion className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descrizione</Accordion.Header>
              <Accordion.Body>
                <div className="mb-0 fw-light text-black">
                  <div dangerouslySetInnerHTML={{ __html: job.description }} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};
export default CardsJobs;
