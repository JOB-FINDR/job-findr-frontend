import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005/api/jobs";

const JobDetailsPage = () => {
  const [requestedJob, setRequestedJob] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setRequestedJob(response.data);
      } catch (err) {
        console.log("Error fetching job details:", err);
      }
    };

    fetchData();
  }, [id]);

  const handleUpload = () => {
    // Handle the upload functionality
    console.log("Upload button clicked");
    // Add your upload logic here
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{requestedJob.title}</h3>
          <p className="card-text">{requestedJob.company}</p>
          <p className="card-text">Location: {requestedJob.jobLocation}</p>
          <p className="card-text">Type: {requestedJob.jobType}</p>
          <p className="card-text">Description: {requestedJob.description}</p>
          <p className="card-text">Salary: {requestedJob.salary}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>

          <button
            className="btn btn-success ml-2"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
