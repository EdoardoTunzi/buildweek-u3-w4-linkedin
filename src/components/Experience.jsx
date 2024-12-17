import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [show, setShow] = useState(false);
  /*  const [update, setUpdate] = useState(false); */
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  /*   let onChangeRole = "";
  let onchangeCompany = "";
  let onchangeStartDate = "";
  let onchangeEndDate = "";
  let onchangeDescription = "";
  let onchangeArea = ""; */

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
  const postExperiences = async (e) => {
    e?.preventDefault();
    /*  const postObj = {
      role: onChangeRole,
      company: onchangeCompany,
      startDate: onchangeStartDate,
      endDate: onchangeEndDate,
      description: onchangeDescription,
      area: onchangeArea
    }; */

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

      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/675ff3db0ea286001528b941/experiences", {
        method: "POST",
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
      } else {
        throw new Error("Error in POSTING user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  /* useEffect(() => {
    fetchExperiences();
  }, [update]); */

  return (
    <Container className="bg-white my-2 p-3">
      <div className="d-flex align-items-center">
        <h4>Esperienza</h4>
        <div className="d-flex ms-auto">
          <PlusLg
            className="me-3 fs-4"
            onClick={() => {
              handleShow();
            }}
          />
          <Pencil className="fs-5" />
        </div>
      </div>
      {experiences &&
        experiences.map((experience, index) => (
          <div key={index} className="d-flex mt-2">
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
        ))}
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> * indica che è un campo obbligatorio</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control name="role" onChange={handleChange} type="text" value={formData.role} /* placeholder={onChangeRole} */ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company</Form.Label>
              <Form.Control name="company" onChange={handleChange} type="text" value={formData.company} /* placeholder={onchangeCompany} */ />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control name="startDate" onChange={handleChange} type="date" value={formData.startDate} /* placeholder={onchangeStartDate} */ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control name="endDate" onChange={handleChange} type="date" value={formData.endDate} /* placeholder={onchangeEndDate} */ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control name="description" onChange={handleChange} type="text" value={formData.description} /* placeholder={onchangeDescription} */ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Località</Form.Label>
              <Form.Control name="area" onChange={handleChange} type="text" value={formData.area} /* placeholder={onchangeArea} */ />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* {error == true && <p className="text-danger">Tutti i campi obbligatori devono essere riempiti</p>} */}
          <Button variant="primary" className="rounded-pill px-3" type="submit" onClick={postExperiences}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default Experience;
