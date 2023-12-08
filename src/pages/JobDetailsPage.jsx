import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

const JobDetailsPage = () => {
  
    const [requestedJob, setRequestedJob] = useState([]);
    const [loading, setLoading] = useState(true);

    const { jobId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/jobs${jobId}`);

          setRequestedJob(response.data);
          console.log(response.data);
          setLoading(false);
        } catch (err) {
          console.log("error");
        }
      };

      fetchData();
    }, []);

    return (
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}
      >
        {loading && (
          <img
            src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
            alt="loading"
          />
        )}

        {!loading && (
          <>
            <h3>Position: {requestedJob.title}</h3>
            <p>Company: {requestedJob.company}</p>
            <p>Description: {requestedJob.description}</p>

            <p>Salary: {requestedJob.salary}</p>

            <button
              className="btn btn-primary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </>
        )}
      </div>
    );
  }


export default JobDetailsPage;
