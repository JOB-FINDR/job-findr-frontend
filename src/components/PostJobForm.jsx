import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function PostJobForm({ getJobs }) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleJobTitle = (e) => setJobTitle(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleJobLocation = (e) => setJobLocation(e.target.value);
  const handleJobType = (e) => setJobType(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const createJob = {
        jobTitle,
        company,
        jobLocation,
        jobType,
        description,
      };

      await axios.post(API_URL, createJob);

      setJobTitle("");
      setCompany("");
      setJobLocation("");
      setJobType("");
      setDescription("");


      getJobs();

      navigate("/");
    } catch (error) {
      console.error("Error Posting Job", error);
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
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJobForm;
