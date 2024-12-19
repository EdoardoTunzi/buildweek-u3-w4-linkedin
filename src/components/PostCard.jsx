import { Button, Container } from "react-bootstrap";
import {
  ChatText,
  GlobeEuropeAfrica,
  HandThumbsUp,
  Repeat,
  SendFill,
  ThreeDots,
  X
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const mainUser = useSelector((state) => state.user._id);
  const randomNumber = Math.floor(Math.random() * 70) + 1;
  const randomNumber2 = Math.floor(Math.random() * 70) + 1;
  const dispatch = useDispatch();
  //fetch delete post
  const deletePost = async () => {
    if (post.user._id === mainUser) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
            }
          }
        );
        if (response.ok) {
          console.log("Post cancellato con successo", response.statusText);
          dispatch({ type: "RENDER_COMPONENTS" });
        } else {
          throw new Error("Errore in DELETE");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container className="bg-white border rounded-3 mt-2 px-3 pt-3">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <img
            src={
              post.user.image ||
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
            alt=""
            className="rounded-circle"
            width={50}
            height={50}
          />
          <div className="lh-1 ms-2">
            <h5 className="m-0">
              {post.user.name + " " + post.user.surname || post.user.username}
            </h5>
            <p className="m-0 mb-1 text-secondary">{post.user.title || ""}</p>
            <p className="m-0 text-secondary">
              2s • <GlobeEuropeAfrica />
            </p>
          </div>
        </div>
        <div className="fs-3 ">
          <ThreeDots className="me-3" />
          <X onClick={deletePost} />
        </div>
      </div>
      <p>{post.text}</p>
      {post.image && (
        <div className="text-center mb-3">
          <img
            className="object-fit-cover w-100"
            src={post.image}
            alt="post image"
          />
        </div>
      )}
      {/* barra interazioni */}
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
            alt=""
          />
          <img
            src="https://static.licdn.com/aero-v1/sc/h/lhxmwiwoag9qepsh4nc28zus"
            alt=""
          />
          <img
            src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
            alt=""
          />
          <p className="m-0 ms-2 text-secondary">{randomNumber2}</p>
        </div>
        <p className="m-0 text-secondary">{randomNumber} Commenti</p>
      </div>
      <div className="border-top d-flex justify-content-around mt-1 px-5 py-1">
        <Button className="btn bg-white text-dark border-white btn-custom px-4 py-2">
          <div className="d-flex align-items-center">
            <HandThumbsUp className="me-1" />
            <p className="m-0 small">Consiglia</p>
          </div>
        </Button>
        <Button className="btn bg-white text-dark border-white btn-custom px-4">
          <div className="d-flex align-items-center">
            <ChatText className="me-1" />
            <p className="m-0 small">Commenta</p>
          </div>
        </Button>
        <Button className="btn bg-white text-dark border-white btn-custom px-4">
          <div className="d-flex align-items-center">
            <Repeat className="me-1" />
            <p className="m-0 small">Diffondi il post</p>
          </div>
        </Button>
        <Button className="btn bg-white text-dark border-white btn-custom px-4">
          <div className="d-flex align-items-center">
            <SendFill className="me-1" />
            <p className="m-0 small">Invia</p>
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default PostCard;
