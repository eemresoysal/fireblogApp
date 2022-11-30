import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { deleteBlog } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blogId = location.state.id;
  const { currentUser } = useContext(AuthContext);

  const handleDelete = (e) => {
    deleteBlog(navigate, blogId);
  };
  return (
    <div className="detail">
      <div className="detailCard">
        <div className="detailTitle">
          <p>{location.state.title}</p>
        </div>
        <div className="detailImg">
          <img src={location.state.image} alt="" />
        </div>
        <div className="detailText">
          <p>{location.state.blogText}</p>
        </div>
      </div>
      <div>
        {currentUser.uid === location.state.authorId ? (
          <div className="detailButtons">
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleDelete}
            >
              Edit
            </Button>
          </div>
        ) : null}

        {/* like butonu yapılacak */}
        {/* <Button onClick={handleLike} variant="contained" endIcon={<FavoriteBorderIcon />}>
          Like
        </Button> */}
      </div>
    </div>
  );
};

export default Details;

{
  /* <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete
        </Button> */
}
