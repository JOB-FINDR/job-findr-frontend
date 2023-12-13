import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  /*  UPDATE - get authenticateUser from the context */
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        // Save the token in the localStorage.      
        storeToken(response.data.authToken);

        // Verify the token by sending a request 
        // to the server's JWT validation endpoint. 
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw="
              alt="job search image"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    id="form2Example1"
                    className="form-control"
                  />
                  <label className="form-label" for="form2Example1">
                    Email:
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                    id="form2Example2"
                    className="form-control"
                  />
                  <label className="form-label" for="form2Example2">
                    Password
                  </label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                        checked
                      />
                      <label className="form-check-label" for="form2Example31">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* // -- Submit button  */}
                <button
                   
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  // href="/jobs"
                >
                  {" "}
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
