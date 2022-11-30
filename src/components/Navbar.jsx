import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../styling/components.css";
import { BsFillPersonFill } from "react-icons/bs";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email);
  return (
    <div className="navigation w-100">
      <div className="navbarLeft d-flex justify-content-center">
        <Link to="/dashboard">
          <div className="ps-3">
            <img
              className="logoImg"
              src="https://www.fenerbahce.org/getmedia/bf4b326b-90f0-4a6a-a332-edbfb6603de7/mobile-emblem-info.png.aspx?width=410&height=410&ext=.png"
              alt=""
            />
          </div>
        </Link>
      </div>

      <div className="navbarMid">
        <h3>Blog Sayfası</h3>
      </div>

      <div
        className="navbarRight  justify-content-center"
        id="basic-navbar-nav"
      >
        <NavDropdown title={currentUser?.email} className="e-3 displayName">
          <div className="linkMenu d-flex flex-column align-items-center">
            {/* link altındaki çizgi kaldırılacak */}
            {currentUser ? (
              <div className="d-flex flex-column">
                <Link className="navbarLink" to="/profile">
                  Profile
                </Link>
                <Link to="/newblog" className="navbarLink">
                  New Blog
                </Link>
                <Link onClick={() => logOut()} className="navbarLink">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="d-flex flex-column ">
                <Link className="navbarLink" to="/register">
                  Register
                </Link>
                <Link className="navbarLink" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </NavDropdown>
      </div>
    </div>
  );
};

export default Navbar;
