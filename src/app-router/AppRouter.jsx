import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import BlogPost from "../pages/BlogPost";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
