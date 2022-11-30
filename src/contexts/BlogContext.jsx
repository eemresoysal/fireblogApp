import { createContext, useState } from "react";
import { addBlog } from "../helpers/firebase";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [blogText, setBlogText] = useState("");

  return (
    <BlogContext.Provider
      value={{
        blog,
        setBlog,
        image,
        setImage,
        title,
        setTitle,
        blogText,
        setBlogText,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
