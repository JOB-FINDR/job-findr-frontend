import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PostJobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate(); 
  const handleTitle = (e) => setTitle(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleJobLocation = (e) => setJobLocation(e.target.value);
  const handleJobType = (e) => setJobType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {


      const postedJob = {
        title,
        company,
        jobLocation,
        jobType,
        description,
        salary,
      };

      console.log(postedJob);

      await axios.post(`${import.meta.env.VITE_API_URL}/api/jobs`, postedJob);

      navigate("/jobs");
    } catch (error) {
      console.error("Error posting job", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4">Post a Job</h1>
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Job Title</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="jobTitle"
                      onChange={handleTitle}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Company</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="company"
                      onChange={handleCompany}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Job Location</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="jobLocation"
                      onChange={handleJobLocation}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Job Type</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="jobType"
                      onChange={handleJobType}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Description</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <textarea
                      className="form-control form-control-lg"
                      type="text"
                      name="description"
                      rows="3"
                      onChange={handleDescription}
                    ></textarea>
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Salary</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      name="salary"
                      onChange={handleSalary}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Post Job
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

export default PostJobForm;
