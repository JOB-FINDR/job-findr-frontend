import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005/api/jobs";

function JobList(props) {
  const [jobs, setJobs] = useState("");

  const handleDelete = (jobId) => {
    axios
      .delete(`${API_URL}/${jobId}`)
      .then(() => {
        props.getJobs();
        console.log("Job deleted");
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
    console.log(`Delete the product with id ${jobId}`);
  };

  return (
    <div className="container mt-4 text-center">
      <div className="row">
        {props.jobs.map((job) => (
          <div className="col-md-6 mb-4" key={job._id}>
            <Link
              to={`/job/${job._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card border-secondary border-3">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">{job.company}</p>
                  <p className="card-text">Location: {job.jobLocation}</p>
                  <p className="card-text">Type: {job.jobType}</p>
                  <p className="card-text">Description: {job.description}</p>
                  <p className="card-text">Salary: {job.salary}</p>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
