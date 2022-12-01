import { doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { deleteBlog, readBlog } from "../helpers/firebase";
import { auth } from "../helpers/firebase";

//*----CODE----

const BlogPost = () => {
  const {
    blog,
    setBlog,
    title,
    setTitle,
    image,
    setImage,
    blogText,
    setBlogText,
  } = useContext(BlogContext);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    readBlog(setBlog);
  }, []);

  return (
    <div className="blogPost d-flex flex-wrap justify-content-center">
      {blog?.map((item, idx) => (
        <Card className="blogCard m-4" key={idx}>
          <div className="cardTop d-flex justify-content-center">
            <Card.Img variant="top" src={item.image} className="cardImg" />
          </div>
          <div className="cardBottom">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <div className="cardText">
                <Card.Text>{item.blogText}</Card.Text>
              </div>
              <Button
                onClick={() =>
                  navigate("/details/" + item.id, {
                    state: {
                      title: item.title,
                      image: item.image,
                      blogText: item.blogText,
                      id: item.id,
                      authorId: item.authorId,
                    },
                  })
                }
                variant="primary"
              >
                Go Details
              </Button>
            </Card.Body>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogPost;
