// routes/signin/Signin.jsx
import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      {/* Navbar with back button */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">FirstImpression</a>
        </div>
        <div className="navbar-end"></div>
      </div>

      {/* Sign in form with darker fields and reduced shadow */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <p className="py-6">Enter your details to access your account.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="input input-bordered bg-gray-100 text-gray-800" 
                  required 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  placeholder="password" 
                  className="input input-bordered bg-gray-100 text-gray-800" 
                  required 
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <div className="text-center mt-4">
                <p>Don't have an account? <a href="#" className="link link-primary">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;