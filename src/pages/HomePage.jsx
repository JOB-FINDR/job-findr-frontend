import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchResultsList  from "../components/SearchResultsList";



function HomePage(props) {
const [results, setResults] = useState([]);
  

  return (
    <>
      <div>
          <div className="App">
            <div className="search-bar-container">
              <SearchBar setResults={setResults} />
              <SearchResultsList results={results} />
              <br />
              <h1>Create A Better Future For Yourself!</h1>
            

            </div>
          </div>
        </div>
    </>
  );
}
export default HomePage;
