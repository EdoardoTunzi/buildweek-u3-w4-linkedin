import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import CardUsers from "./CardUsers";
import MyFooter from "./MyFooter";
import SectionConsigliati from "./SectionConsigliati";
import Analisi from "./Analisi";
import Informazioni from "./Informazioni";
import Attivita from "./Attivita";
import Competenze from "./Competenze";
import Interessi from "./Interessi";
import LinguaProfilo from "./LinguaProfilo";
import Experience from "./Experience";
import SectionFormazione from "./SectionFormazione";

const ProfilePage = () => {
  return (
    <Container>
      <Row className="mt-4 mb-5 pb-5">
        <Col xs={9}>
          <ProfileCard />
          <SectionConsigliati />
          <Analisi />
          <Informazioni />
          <Attivita />
          <Experience />
          <SectionFormazione />
          <Competenze />
          <Interessi />
        </Col>
        <Col xs={3}>
          <LinguaProfilo />
          <CardUsers />
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
};

export default ProfilePage;
