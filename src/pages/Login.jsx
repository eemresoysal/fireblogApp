import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styling/pages.css";
import { signIn, signUpWithGoogle } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  const handleGoogle = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <div className="registerBox">
      <div className="loginBox">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <label>Email</label>
            <div className="inputDiv">
              <AiOutlineMail />
              <input
                required
                type="email"
                name="email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="inputBox">
            <label>Password</label>
            <div className="inputDiv">
              <RiLockPasswordLine />
              <input
                required
                type="password"
                name="password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="buttonBox">
            <div>
              <button type="submit" className="button">
                Sign In
              </button>
            </div>

            <div>
              <button className="button" onClick={handleGoogle} type="button">
                <FcGoogle /> Continue With Google
              </button>
            </div>
            <div className="infoBox">
              <Link className="info">Forgot Password?</Link>
              <Link to="/register" className="info">
                Don't have an account? Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
