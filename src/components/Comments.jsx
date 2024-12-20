import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Comments = ({ post, setComment }) => {
  const [comments, setComments] = useState();
  const mainUser = useSelector((state) => state.user);
  const [postData, setPostData] = useState({
    comment: "",
    rate: 1,
    elementId: post._id
  });
  const [update, setUpdate] = useState(false);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
        }
      });
      if (response.ok) {
        let comments = await response.json();
        comments = comments.filter((comment) => comment.elementId === post._id);
        setComments(comments);
        setComment(comments);
        console.log(comments);

        /* handleShow(); */
      } else {
        throw new Error("Errore in DELETE");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNkYjBlYTI4NjAwMTUyOGI5NDEiLCJpYXQiOjE3MzQzNDE1OTUsImV4cCI6MTczNTU1MTE5NX0.LSC43uSIUtEWWYNRb3pfzyjTIES5Zi1XKgg7DKonBjQ"
        },
        body: JSON.stringify(postData)
      });
      if (response.ok) {
        console.log(response.statusText);
        // Aggiungi il nuovo commento a `comments`
        setComments((prevComments) => [...prevComments, postData]);
        // Resetta il form
        setPostData({
          comment: "",
          rate: 1,
          elementId: post._id
        });
        setUpdate(!update);
      } else {
        throw new Error("Errore in DELETE");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    fetchComments();
  }, [update]);

  return (
    <>
      <div className="p-3">
        <div className="d-flex align-items-center">
          <img style={{ width: "50px", height: "50px" }} className="rounded-circle me-3" src={mainUser.image} alt="profile photo" />
          <Form onSubmit={postComment}>
            <Form.Control
              className="rounded-pill p-2 pe-5"
              type="text"
              placeholder="Aggiungi un commento..."
              value={postData.comment}
              onChange={(e) =>
                setPostData((prevState) => ({
                  ...prevState,
                  comment: e.target.value
                }))
              }
            />
          </Form>
        </div>

        {comments &&
          comments.map((comment, index) => (
            <div key={index} className="border rounded-3 mt-2 p-2">
              <p className="fw-semibold m-0">{comment.author}</p>
              <p className="m-0">{comment.comment}</p>
            </div>
          ))}
      </div>
    </>
  );
};
export default Comments;
