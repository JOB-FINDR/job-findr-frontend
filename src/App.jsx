import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PostJobForm from "./components/PostJobForm";
import UpdateJobForm from "./components/UpdateJobForm";
import Navbar from "./components/Navbar";
import "./App.css";
import JobList from "./pages/JobListPage";
import FindJob from "./pages/FindJobPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import SignupForm from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import JobApplicationForm from "./components/JobApplicationForm";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {

  return (
    <>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<IsPrivate> <PostJobForm /> </IsPrivate>} />
          <Route path="/update/:id" element={<IsPrivate> <UpdateJobForm /> </IsPrivate>} />
          <Route path="/delete/:id" element={<IsPrivate> <JobList /> </IsPrivate>} />
          <Route path="/jobs" element={<IsPrivate> <FindJob /> </IsPrivate>} />
          <Route path="/job/:id" element={<IsPrivate> <JobDetailsPage /> </IsPrivate>} />
          <Route path="/signup" element={<IsAnon> <SignupForm /> </IsAnon>} />
          <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon>  } />
          <Route path="/application/:id" element={<IsPrivate> <JobApplicationForm /> </IsPrivate>} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
