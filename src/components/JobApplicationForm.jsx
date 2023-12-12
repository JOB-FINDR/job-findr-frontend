import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function JobApplicationForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverletter] = useState("");
  const [cv, setCv] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleFullname = (e) => setFullname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleCoverLetter = (e) => setCoverletter(e.target.value);
  const handleCv = (e) => setCv(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newApplication = {
        fullname,
        email,
        coverLetter,
        // jobId,
        cv,
      };

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/applications`,
        newApplication
      );
      console.log(newApplication);

      alert("Your application has been submitted successfully")

      navigate();
    } catch (err) {
      console.log("Error fetching application", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4">Apply for a job</h1>

            <div className="card">
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Full name</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="name"
                      onChange={handleFullname}
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
                      onChange={handleEmail}
                      className="form-control form-control-lg"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Upload Cover Letter</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      onChange={handleCoverLetter}
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <div className="small text-muted mt-2">
                      Upload your cover letter. Max file size 50 MB
                    </div>
                  </div>
                </div>

                <hr className="mx-n3" />

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Upload CV</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      onChange={handleCv}
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    onClick={() =>
                      alert("Your application has been submitted successfully")
                    }
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default JobApplicationForm;
