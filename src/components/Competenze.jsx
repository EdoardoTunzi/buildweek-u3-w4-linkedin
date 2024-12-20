import { Button, Container } from "react-bootstrap";
import { ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Competenze = () => {
  const _id = useSelector((state) => state.user._id);
  return (
    <Container className="bg-white border rounded-3 mt-2 px-3 pt-3">
      <div className="d-flex align-items-center">
        <h4>Competenze</h4>
        {_id === "675ff3db0ea286001528b941" && (
          <div className="d-flex ms-auto">
            <PlusLg className="me-3 fs-4" />
            <Pencil className="fs-5" />
          </div>
        )}
      </div>

      <div>
        <p className="fw-semibold mb-1">Epicode</p>
        <div className="d-flex align-items-center">
          <img
            src="https://yt3.googleusercontent.com/9RGAVa52qAdJfJSShxr9prs7EUpia4tsVsnvrb-E1Yhdj7H4LMU4gHLRDC-7tJLV9BVYaEq6M7g=s900-c-k-c0x00ffffff-no-rj"
            alt="epicode logo"
            width={30}
            className="rounded-circle "
          />
          <p className="m-0 ms-2">
            {" "}
            Full Stack - Web Development Student presso EPICODE
          </p>
        </div>
        <div className="d-flex align-items-center mt-3">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            width={30}
            className="rounded-circle"
          />
          <p className="m-0 ms-2">
            Competenze confermate da 1 persona negli ultimi 6 mesi
          </p>
        </div>
        <div className="d-flex mt-3 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="30"
            height="30"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>
          <p className="m-0 ms-2">1 conferma</p>
        </div>
      </div>
      <Button className="btn border-0 border-top fw-semibold text-dark bg-white w-100 px-0 mt-1">
        Mostra tutte le competenze <ArrowRight className="fw-bold" />
      </Button>
    </Container>
  );
};
export default Competenze;
