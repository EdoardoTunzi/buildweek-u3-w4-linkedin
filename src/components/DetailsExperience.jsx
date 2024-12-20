import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import CardUsers from "./CardUsers";
import { useEffect, useState } from "react";
import { Pencil } from "react-bootstrap-icons";

const DetailsExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [modExperience, setModExperience] = useState(null);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });

  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const fetchExperiences = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/675ff3db0ea286001528b941/experiences", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
        }
      });
      if (response.ok) {
        let experiences = await response.json();
        if (experiences) {
          /* console.log(experiences); */
          setExperiences(experiences);
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

  const putExperience = async (e) => {
    e?.preventDefault();
    if (
      formData.role.length > 0 &&
      formData.company.length > 0 &&
      formData.startDate !== null &&
      formData.endDate !== null &&
      formData.description.length > 0 &&
      formData.area.length > 0
    ) {
      // Formatta le date nel formato YYYY-MM-DD
      const formattedData = {
        role: formData.role,
        company: formData.company,
        startDate: formData.startDate ? new Date(formData.startDate).toISOString().split("T")[0] : null,
        endDate: formData.endDate ? new Date(formData.endDate).toISOString().split("T")[0] : null,
        description: formData.description,
        area: formData.area
      };

      try {
        console.log(JSON.stringify(formattedData));

        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/675ff3db0ea286001528b941/experiences/${modExperience._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
          },
          body: JSON.stringify(formattedData)
        });
        if (response.ok) {
          const newExperience = await response.json();
          console.log(newExperience);
          /* setUpdate(!update); */
          setExperiences((prev) => [...prev, newExperience]);
          handleShow(); //chiude il modale
          //resetta form
          setFormData({
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            area: ""
          });
          setUpdate(!update);
        } else {
          throw new Error("Error in POSTING user data");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Tutti i campi sono obbligatori, assicurati di aver riempito tutti i campi");
    }
  };

  const deleteExperience = async () => {
    console.log(modExperience._id);
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/675ff3db0ea286001528b941/experiences/${modExperience._id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
      }
    });
    if (response.ok) {
      handleShow();
      setUpdate(!update);
    } else {
      console.log("Errore nella Delete", response.statusText);
    }
  };

  // Fetch per postare l'immagine
  const postImage = async () => {
    if (!file) {
      console.log("Nessun file selezionato");
      return;
    }

    const img = new FormData();
    img.append("experience", file); // Aggiungi il file al FormData
    console.log(img);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/675ff3db0ea286001528b941/experiences/${modExperience._id}/picture`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
        },
        body: img
      });

      if (response.ok) {
        console.log(response);

        console.log("Immagine caricata con successo");
      } else {
        console.log("Errore nel caricamento dell'immagine:", response.statusText);
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [update]);

  return (
    <Container>
      <Row>
        <Col xs={9}>
          <Container className="bg-white my-2 p-3 border rounded-3">
            {experiences &&
              experiences.map((experience, index) => (
                <div key={index} className="d-flex mt-2 border p-3 justify-content-between">
                  <div>
                    <img src={experience.image} alt="logo" width={50} height={50} />
                    <div>
                      <h5 className="m-0">{experience.company}</h5>
                      <p className="m-0 fw-semibold">{experience.role}</p>
                      <p className="m-0">{experience.description}</p>
                      <p className="m-0 text-secondary">
                        {experience.startDate.toLocaleString().slice(0, experience.startDate.indexOf("T"))} -{" "}
                        {experience.endDate.toLocaleString().slice(0, experience.startDate.indexOf("T"))}
                      </p>
                      <p className="m-0 text-secondary">{experience.area}</p>
                    </div>
                  </div>
                  <div>
                    <Pencil
                      className="fs-5"
                      onClick={() => {
                        setModExperience(experience);
                        handleShow();
                      }}
                    />
                  </div>
                </div>
              ))}
            {modExperience && (
              <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                  <Modal.Title>Modifica esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> * indica che è un campo obbligatorio</p>
                  <Form id="experienceForm">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Qualifica</Form.Label>
                      <Form.Control name="role" onChange={handleChange} type="text" value={formData.role} required placeholder={modExperience.role} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Azienda o organizzazione</Form.Label>
                      <Form.Control name="company" onChange={handleChange} type="text" value={formData.company} required placeholder={modExperience.company} />
                    </Form.Group>

                    <div className="d-flex gap-3 ">
                      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Data di inizio</Form.Label>
                        <Form.Control
                          name="startDate"
                          onChange={handleChange}
                          type="date"
                          value={formData.startDate}
                          required /* placeholder={onchangeStartDate} */
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Data di fine</Form.Label>
                        <Form.Control
                          name="endDate"
                          onChange={handleChange}
                          type="date"
                          value={formData.endDate}
                          required /* placeholder={onchangeEndDate} */
                        />
                      </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Descrizione</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                        required
                        placeholder={modExperience.description}
                      />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Carica un&apos;immagine</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]); // Salva il file selezionato
                        }}
                      />
                      <Button onClick={postImage}>Carica immagine</Button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Località</Form.Label>
                      <Form.Control name="area" onChange={handleChange} type="text" value={formData.area} required placeholder={modExperience.area} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" className="rounded-pill px-3" type="submit" form="experienceForm" onClick={putExperience}>
                    Modifica
                  </Button>
                  <Button variant="danger" className="rounded-pill px-3" onClick={deleteExperience}>
                    Elimina esperienza
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </Container>
        </Col>
        <Col xs={3}>
          <CardUsers />
        </Col>
      </Row>
    </Container>
  );
};
export default DetailsExperience;
