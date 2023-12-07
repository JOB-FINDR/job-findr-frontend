import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "../components/JobList";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function HomePage(props) {
  

  return (
    <>
      <div>
        <h1>Job Findr</h1>
        
      </div>
    </>
  );
}
export default HomePage;
