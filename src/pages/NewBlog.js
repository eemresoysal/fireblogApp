import { getDatabase, ref, set } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { addBlog, db } from "../helpers/firebase";

function NewBlog() {
  const {
    blog,
    setBlog,
    title,
    setTitle,
    image,
    setImage,
    blogText,
    setBlogText,
    blogId,
  } = useContext(BlogContext);
  const [file, setFile] = useState();

  function handleChange(e) {
    // console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    // setImage(setFile);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, image, blogText);
    e.target.reset();
  };

  return (
    <div className="newBlog">
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-row gap-5 flex-wrap mt-3 justify-content-center">
          <div className=" d-flex flex-column align-items-center">
            <label>Title</label>

            <input
              placeholder="Enter Blog Title..."
              className="m-2"
              required
              type="text"
              name="title"
              id=""
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="addImgBox">
            <div className=" d-flex flex-column align-items-center">
              <label>Image</label>
              <input
                // required
                className="m-2"
                type="text"
                name="image"
                placeholder="Please enter image URL"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="chooseFile p-3">
              <input type="file" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center ">
          <textarea
            className="textArea"
            onChange={(e) => setBlogText(e.target.value)}
            name="blogText"
            id=""
            placeholder="Write something..."
          ></textarea>
          <button className="btn btn-success w-50 mt-4">Add New Blog</button>
        </div>
      </form>
    </div>
  );
}
export default NewBlog;
