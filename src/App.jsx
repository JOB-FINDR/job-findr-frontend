import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PostJobForm from "./components/PostJobForm";
import UpdateJobForm from "./components/UpdateJobForm";
import Navbar from "./components/Navbar";
import "./App.css";
import JobList from "./components/JobList";
import FindJob from "./pages/FindJobPage";
import SearchBar from "./components/SearchBar";
import SearchResultsList  from "./components/SearchResultsList";
import JobDetailsPage from "./pages/JobDetailsPage";
import SignupForm from "./components/SignupForm";

function App() {
  // const [results, setResults] = useState([]);

  return (
    <>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<PostJobForm />} />
          <Route path="/update/:id" element={<UpdateJobForm />} />
          <Route path="/delete/:id" element={<JobList />} />
          <Route path="/jobs" element={<FindJob />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          <Route path="/signup" element={<SignupForm />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
