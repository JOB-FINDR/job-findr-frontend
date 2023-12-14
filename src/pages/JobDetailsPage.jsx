import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";



const JobDetailsPage = (props) => {
  const [requestedJob, setRequestedJob] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const storedToken = localStorage.getItem('authToken');

  const getJob = () => {
    console.log('getting job')
    // Get the token from the localStorage
  
    //send the token through the request "Authorization" Headers
    axios
    .get(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`,
      {headers: {Authorization: `Bearer ${storedToken}`}}
    )
    .then((response) => {
      const oneJob = response.data;
      console.log(response.data);
      setRequestedJob(oneJob);
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log('from useEffect')
    getJob();
  }, [] );

  const handleUpload = () => {
    // Handle the upload functionality
    console.log("Apply button clicked");
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

          <Link to={`/application/${id}`}>
          <button
            className="btn btn-success ml-2"
            onClick={handleUpload}
          >
            Apply
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;


