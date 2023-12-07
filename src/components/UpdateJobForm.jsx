import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005/api/jobs";

function UpdateJobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        const job = response.data;

        setJobTitle(job.jobTitle);
        setCompany(job.company);
        setJobLocation(job.jobLocation);
        setJobType(job.jobType);
        setDescription(job.description);
      } catch (error) {
        console.error("Error fetching job details", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleJobTitle = (e) => setJobTitle(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleJobLocation = (e) => setJobLocation(e.target.value);
  const handleJobType = (e) => setJobType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const updatedJob = {
        jobTitle,
        company,
        jobLocation,
        jobType,
        description,
      };

      await axios.put(`${API_URL}/${id}`, updatedJob);

      navigate("/");
    } catch (error) {
      console.error("Error updating job", error);
    }
  };

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center" style={{ maxWidth: "700px" }}>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={jobTitle}
          onChange={handleJobTitle}
        />
        <input
          className="form-control"
          type="text"
          name="company"
          placeholder="Company"
          value={company}
          onChange={handleCompany}
        />
        <input
          className="form-control"
          type="text"
          name="jobLocation"
          placeholder="Job Location"
          value={jobLocation}
          onChange={handleJobLocation}
        />
        <input
          className="form-control"
          type="text"
          name="jobType"
          placeholder="Job Type"
          value={jobType}
          onChange={handleJobType}
        />
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
        ></textarea>
        <button className="btn btn-primary btn-round" type="submit">
          Edit Job
        </button>
      </form>
    </div>
  );
}

export default UpdateJobForm;
