import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "./JobListPage";
import { Link } from "react-router-dom";



function FindJob() {
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/jobs`)
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
    <div>
      <JobList jobs={jobs} getJobs={getJobs} />

      <Link to={"/jobs"}></Link>
    </div>
  );
}

export default FindJob;
