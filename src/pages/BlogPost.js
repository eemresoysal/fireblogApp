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
    <div className=" blogPost d-flex flex-wrap justify-content-center">
      {blog?.map((item, idx) => (
        <Card className="m-4 d-flex w-50" key={idx}>
          <Card.Img variant="top" src={item.image} className="w-100" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.blogText}</Card.Text>
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
        </Card>
      ))}
    </div>
  );
};

export default BlogPost;
