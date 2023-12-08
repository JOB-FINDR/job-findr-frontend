import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5005/api/signup",formData
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error.response.data);
    }
  };
  return (
    

    <form
      onSubmit={handleSignup}
      className="vh-100"
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4">Apply for a job</h1>

            <div className="card" >
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Full name</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="username"
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Email address</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="email"
                      name="email"
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Password</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="password"
                      name="password"
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

        
                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Upload CV</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <div className="small text-muted mt-2">
                      Upload your CV/Resume or any other relevant file. Max file
                      size 50 MB
                    </div>
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignupForm;
