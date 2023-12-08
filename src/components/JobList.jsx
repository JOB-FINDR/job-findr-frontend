import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005/api/jobs";

function JobList(props) {
  const [jobs, setJobs] = useState("")
  const handleDelete = (jobId) => {
    axios
      .delete(`${API_URL}/${jobId}`)
      .then(() => {
        props.getJobs(); // Assuming you have a function to fetch jobs in props
        console.log("Job deleted");
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
      console.log(`Delete the product with id ${jobId}`);
  };

  return (
    <div className="container">
      <div className="row" >
        {props.jobs.map((job) => (
          <div className="col-md-4" key={job._id}>
            <div className="card mb-4">

              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.company}</p>
                <p className="card-text">Description: {job.description}</p>
                <p className="card-text">Salary: {job.salary}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
                <Link to={`/update/${job._id}`}>
                  <button className="btn btn-primary ml-2">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
