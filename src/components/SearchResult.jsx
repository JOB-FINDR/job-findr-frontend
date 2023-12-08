import React from "react";
import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  return (
    <div
      className="search-result"
      onClick={(e) => {
        navigate("/jobs");
      }}
    >
      {result.title}
    </div>
  );
};

export default SearchResult;
