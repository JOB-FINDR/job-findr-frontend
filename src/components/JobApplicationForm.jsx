import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005/applications";

function JobApplicationForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverletter] = useState("");
  const [cv, setCv] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchApplicationDetails = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/${id}`);
  //       const application = response.data;
  //       console.log(response.data);

  //       setFullname(application.fullname);
  //       setEmail(application.email);
  //       setCoverletter(application.coverletter);
  //       setCv(application.cv);
  //     } catch (error){
  //       console.log("Error fetching application details", error)
  //     }
  //   };

  //   fetchApplicationDetails();
  // },[id]);

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
      

      await axios.post(`${API_URL}`, newApplication);
      console.log(newApplication);

      navigate();
    } catch (err) {
      console.log("Error fetching application", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-9">
            <h1 class="text-white mb-4">Apply for a job</h1>

            <div class="card">
              <div class="card-body">
                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Full name</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input
                      type="text"
                      name="name"
                      onChange={handleFullname}
                      class="form-control form-control-lg"
                    />
                  </div>
                </div>

                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Email address</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input
                      type="email"
                      onChange={handleEmail}
                      class="form-control form-control-lg"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Upload Cover Letter</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input
                      onChange={handleCoverLetter}
                      class="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <div class="small text-muted mt-2">
                      Upload your cover letter. Max file size 50 MB
                    </div>
                  </div>
                </div>

                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Upload CV</h6>
                  </div>
                  <div class="col-md-9 pe-5">
                    <input
                      onChange={handleCv}
                      class="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                    <div class="small text-muted mt-2">
                      Upload your CV/Resume or any other relevant file. Max file
                      size 50 MB
                    </div>
                  </div>
                </div>

                <hr class="mx-n3" />

                <div class="px-5 py-4">
                  <button type="submit" class="btn btn-primary btn-lg">
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
}

export default JobApplicationForm;
