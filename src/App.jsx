import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import PostJobForm from "./components/PostJobForm";
import UpdateJobForm from "./components/UpdateJobForm";
import Navbar from "./components/Navbar";
import "./App.css";
import JobList from "./components/JobList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<PostJobForm />} />
        <Route path="/update/:id" element={<UpdateJobForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
