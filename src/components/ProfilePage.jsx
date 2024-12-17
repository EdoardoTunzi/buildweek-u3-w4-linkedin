import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import CardUsers from "./CardUsers";
import MyFooter from "./MyFooter";
import Analisi from "./Analisi";
import Informazioni from "./Informazioni";
import Attivita from "./Attivita";
const ProfilePage = () => {
  return (
    <Container>
      <Row className="mt-4 mb-5 pb-5">
        <Col xs={9}>
          <ProfileCard />
          <Analisi />
          <Informazioni />
          <Attivita />
        </Col>
        <Col xs={3}>
          <CardUsers />
        </Col>
      </Row>
      <MyFooter />
    </Container>
  );
};

export default ProfilePage;
