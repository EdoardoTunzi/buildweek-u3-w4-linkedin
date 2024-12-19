import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AsideFooterHome from "./AsideFooterHome";
import LeftAsideJobs from "./LeftAsideJobs";
import CardsJobs from "./CardsJobs";

const NavJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ",
          },
        }
      );
      if (response.ok) {
        let jobs = await response.json();
        if (jobs) {
          console.log(jobs);
          setJobs(jobs.data.slice(0, 20));
        } else {
          console.log("Error: data not found");
        }
      } else {
        throw new Error("Error in fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={3}>
          {" "}
          <LeftAsideJobs />{" "}
        </Col>
        <Col md={6}>
          <Container className="bg-white rounded-3 mt-2 p-3">
            <div>
              <h5 className="mb-0">Le principali offerte di lavoro per te</h5>
              <p className="text-secondary">
                In base al tuo profilo, alle tue preferenze e ad attività come
                candidature, ricerche e salvataggi
              </p>
            </div>
            {jobs &&
              jobs.map((job, index) => (
                <div key={index}>
                  <CardsJobs job={job} />
                </div>
              ))}
          </Container>
        </Col>
        <Col md={3}>
          <AsideFooterHome />
        </Col>
      </Row>
    </Container>
  );
};
export default NavJobsPage;
