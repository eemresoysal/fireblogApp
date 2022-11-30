import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styling/pages.css";
import { createUser } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../helpers/firebase";

//*-------Codes---------
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
  };
  const handleGoogle = () => {
    signUpWithGoogle(navigate);
  };
  return (
    <div className="registerBox">
      <div className="loginBox">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit} className="form">
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
                Sign Up
              </button>
            </div>

            <div>
              {/* type a bak ! */}
              <button onClick={handleGoogle} className="button" type="">
                <FcGoogle /> Continue With Google
              </button>
            </div>
            <div>
              <Link to="/login" className="info">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
