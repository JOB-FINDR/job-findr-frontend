import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "../components/JobList";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchResultsList  from "../components/SearchResultsList";

const API_URL = "http://localhost:5005/api";

function HomePage(props) {
const [results, setResults] = useState([]);
  

  return (
    <>
      <div>
          <div className="App">
            <div className="search-bar-container">
              <SearchBar setResults={setResults} />
              <SearchResultsList results={results} />
            </div>
          </div>
        </div>
    </>
  );
}
export default HomePage;
