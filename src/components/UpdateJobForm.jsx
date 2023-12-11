import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005/api/jobs";

function UpdateJobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState(""); 

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        const job = response.data;

        setTitle(job.title);
        setCompany(job.company);
        setJobLocation(job.jobLocation);
        setJobType(job.jobType);
        setDescription(job.description);
        setSalary(job.salary);
      } catch (error) {
        console.error("Error fetching job details", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleJobLocation = (e) => setJobLocation(e.target.value);
  const handleJobType = (e) => setJobType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleSalary = (e) => setSalary((e.target.value)); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedJob = {
        title,
        company,
        jobLocation,
        jobType,
        description,
        salary,
      };

      console.log(updatedJob);

      await axios.put(`${API_URL}/${id}`, updatedJob);

      navigate("/jobs");
    } catch (error) {
      console.error("Error updating job", error);
    }
  };

  return (
    
     <>
    
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
          placeholder="Job Title"
          value={title}
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
          placeholder="Company"
          value={company}
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
          placeholder="Job Location"
          value={jobLocation}
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
          placeholder="Job Type"
          value={jobType}
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
          placeholder="Description"
          rows="3"
          value={description}
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
                      type="number"
          name="salary"
          placeholder="Salary"
          value={salary || ""}
          onChange={handleSalary}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Update a Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>

  );
  
}

export default UpdateJobForm;
