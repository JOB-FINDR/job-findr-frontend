import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "../components/JobList";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const API_URL = "http://localhost:5005/api";

function HomePage(props) {
  

  return (
    <>
      <div>
        <div className="App">
          <div className="search-bar-container">
          < SearchBar />
          <div>SearchResults</div>
        </div></div>
      </div>
    </>
  );
}
export default HomePage;
