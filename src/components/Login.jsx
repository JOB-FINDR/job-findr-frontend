import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });

      //the backend returns a token upon successful login
      const { token } = response.data;
      console.log(response.data);

      // Store the token in local storage
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    // <div>
    //   <h2>Login</h2>
    //   <label>
    //     Email:
    //     <input
    //       type="text"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <button onClick={handleLogin}>Login</button>
    // </div>

    
<section className=" text-center text-lg-start">
  
  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-4 d-none d-lg-flex">
        <img src="src/images/login.jpeg" alt="job search image"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div className="col-lg-8">
        <div className="card-body py-5 px-md-5">

          <form onSubmit={handleLogin}>
            
            <div className="form-outline mb-4">
              <input type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} id="form2Example1" className="form-control" />
              <label className="form-label" for="form2Example1">Email address</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} id="form2Example2" className="form-control" />
              <label className="form-label" for="form2Example2">Password</label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* // -- Submit button  */}
            <button onClick={handleLogin} type="button" className="btn btn-primary btn-block mb-4"  href="/jobs" > Login</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
 
  );
};

export default Login;
