import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import slide3 from "../images/slide3.webp";

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
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/333253564/original/c7e34c2df3c1378714bc6027c83096f8c909a19e/search-and-apply-for-jobs-remote-jobs-online-jobs-application.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={slide3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.themanual.com/wp-content/uploads/sites/9/2022/10/job-search.jpg?p=1" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
