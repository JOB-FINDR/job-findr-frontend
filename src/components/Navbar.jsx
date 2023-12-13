import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import {useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" height="75vw" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1>Job Findr</h1>
          </Link>

          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/jobs">
                  Jobs
                </Link>
                
              </li>
              
              </>
              
            )}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/signup">
                    SignUp
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Post a Job
              </Link>
            </li>

            {isLoggedIn && (
              <>
              <li className="nav-item">
                  <span className="nav-link">Hi, {user.name}</span>
                </li>
                <li className="nav-item ms-2">
                  <button className="btn btn-link nav-link" onClick={logOutUser}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
