import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
// import { useSelector } from "react-redux";

import {
  Calendar2Week,
  CaretDownFill,
  EmojiSmile,
  Image,
  Newspaper,
  PlayBtnFill,
  PlusLg
} from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const CreatePost = () => {
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [postText, setPostText] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [postId, setPostId] = useState("");
  const dispatch = useDispatch();

  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setError(false);
      setShow(true);
    }
  };

  const handleSubmit = async () => {
    if (postText.length === 0) {
      setError(true);
    } else {
      const postObj = {
        text: postText
      };
      console.log(postText);
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
            },
            body: JSON.stringify(postObj)
          }
        );
        if (!response.ok) {
          console.log("errore nella fetch post,", response.statusText);
        } else {
          const responseObj = await response.json();
          setPostId();
          postImage(responseObj._id); //dovrebbe passare l'id direttamente qui
          console.log(postId);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Fetch per postare l'immagine
  const postImage = async (id) => {
    if (!imgFile && !postId) {
      console.log("Nessun file selezionato o id mancante");
      return;
    }

    const img = new FormData();
    img.append("post", imgFile); // Aggiungi il file al FormData
    console.log(img);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
          },
          body: img
        }
      );

      if (response.ok) {
        console.log(response);
        handleShow();
        dispatch({ type: "RENDER_COMPONENTS" });
        console.log("Immagine caricata con successo");
      } else {
        console.log(
          "Errore nel caricamento dell'immagine:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  return (
    <>
      {user && (
        <Container className="mt-2 mb-2 px-3 py-2 border rounded-2 bg-white">
          <Row className="mt-2">
            <Col xs={1}>
              <img
                style={{ width: "50px", height: "50px" }}
                className="rounded-circle"
                src={user.image}
                alt="profile photo"
              />
            </Col>
            <Col xs={11}>
              <Button
                onClick={() => {
                  handleShow();
                }}
                className="ms-2 h-100 w-100 rounded-pill text-start border-secondary text-secondary fw-semibold bg-white"
              >
                Crea un post
              </Button>
            </Col>
          </Row>
          <div className="mt-3 d-flex justify-content-around ">
            <div className=" btn-custom rounded-3 px-3 py-1 text-dark d-flex align-items-center">
              <PlayBtnFill className="text-success fs-4 me-2" />
              <p className="m-0 fw-semibold d-inline-block fs-5">Video</p>
            </div>
            <div className=" btn-custom rounded-3 px-3 py-1 text-dark d-flex align-items-center">
              <Image className="text-primary fs-4 me-2" />
              <p className="m-0 fw-semibold f-inline-block fs-5">Foto</p>
            </div>
            <div className=" btn-custom rounded-3 px-3 py-1 text-dark d-flex align-items-center">
              <Newspaper className="color-orange fs-4 me-2" />
              <p className="m-0 fw-semibold f-inline-block fs-5">
                Scrivi un articolo
              </p>
            </div>
          </div>

          <Modal
            show={show}
            onHide={() => {
              handleShow();
            }}
          >
            <Modal.Header
              closeButton
              className="border-0 d-flex align-items-start"
            >
              <Modal.Title>
                <div className="d-flex align-items-center">
                  <img
                    src={user.image}
                    alt="profile image"
                    className="rounded-circle"
                    style={{ height: "80px" }}
                  />
                  <div className="ms-2">
                    <p className="mb-0">
                      {user.name} {user.surname} <CaretDownFill />
                    </p>
                    <p className="mb-0 fw-light fs-6">Pubblica: Chiunque</p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={() => {
                  handleSubmit();
                }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="border "
                    as="textarea"
                    onChange={(e) => {
                      setPostText(e.target.value);
                    }}
                    rows={15}
                    cols={50}
                    placeholder="Di cosa vorresti parlare?"
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Carica un&apos;immagine</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      setImgFile(e.target.files[0]); // Salva il file selezionato
                    }}
                  />
                  {/* <Button onClick={postImage}>Carica immagine</Button> */}
                </Form.Group>
                <EmojiSmile className="fs-4" />
                <div className="fs-4 text-secondary fw-semibold">
                  <Image className="me-4" />
                  <PlayBtnFill className="me-4" />
                  <Calendar2Week className="me-4" />
                  <PlusLg className="me-4" />
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {error == true && (
                <p className="text-danger me-5">
                  Non puoi salvare un post vuoto
                </p>
              )}
              <Button
                variant="primary"
                className="rounded-pill px-3"
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Salva
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default CreatePost;
