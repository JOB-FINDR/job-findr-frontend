import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobListPage(props) {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const getAllJobs = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/jobs`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setJobs(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllJobs();
  }, []);

  const handleDelete = (jobId) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`)

      .then(() => {
        props.getJobs();
        console.log("Job deleted");
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
    console.log(`Delete the product with id ${jobId}`);
    //navigate("/jobs");
  };

  return (
    <div className="container mt-4 text-center">
      <div className="row">
        {props.jobs.map((job) => (
          <div className="col-md-6 mb-4" key={job._id}>
            <div className="card border-secondary border-3">
              <Link to={`/job/${job._id}`} style={{ textDecoration: "none", color: "black" }}>
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">{job.company}</p>
                  <p className="card-text">Location: {job.jobLocation}</p>
                  <p className="card-text">Type: {job.jobType}</p>
                  <p className="card-text">Description: {job.description}</p>
                  <p className="card-text">Salary: {job.salary}</p>
                </div>
              </Link>
              <div className="btn-group mx-auto mt-3">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
                <Link to={`/update/${job._id}`}>
                  <button className="btn btn-primary ml-2">Edit</button>
                </Link>
                <Link to={`/application/${job._id}`}>
                  <button className="btn btn-success ml-2">Apply</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListPage;
