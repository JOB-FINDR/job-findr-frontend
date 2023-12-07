import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "../components/JobList";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function HomePage(props) {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios
      .get(`${API_URL}/jobs`)
      .then(function (response) {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Error Fetching the Jobs", error);
      });
  };

  useEffect(function () {
    getJobs();
  }, []);

  return (
    <>
      <div>
        <h1>Job Findr</h1>
        <JobList jobs={jobs} getJobs={getJobs} />

        <Link to={"/jobs"}></Link>

        <button>Post a Job</button>
      </div>
    </>
  );
}
export default HomePage;
