import { Col, Container, Row } from "react-bootstrap";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import LeftAsideHome from "./LeftAsideHome";
import RightAsideHome from "./RightAsideHome";
import CreatePost from "./CreatePost";
import { CaretDownFill } from "react-bootstrap-icons";
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  //fetch dei post
  const getPosts = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
        }
      });
      if (response.ok) {
        let postsArray = await response.json();
        if (postsArray) {
          console.log(postsArray);
          setPosts(postsArray);
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
    getPosts();
    /* console.log(posts); */
  }, []);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <LeftAsideHome />
        </Col>
        <Col md={6}>
          <CreatePost />
          <Container>
            <Row className="text-secondary d-flex justify-content-between align-items-center">
              <Col xs={4}>
                <p>____________________________</p>
              </Col>
              <Col xs={8} className="fs-7 text-end">
                Seleziona la visualizzazione del feed: <span className="text-dark fw-semibold">Più rilevanti per primi</span> <CaretDownFill />
              </Col>
            </Row>
          </Container>
          {posts &&
            posts
              .reverse()
              .slice(0, 30)
              .map((post) => (
                <div key={post._id}>
                  <PostCard post={post} />
                </div>
              ))}
        </Col>
        <Col md={3}>
          <RightAsideHome />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
