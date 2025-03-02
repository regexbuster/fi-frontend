// routes/signup/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
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

      {/* Sign up form */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">Create a new account to get started.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered bg-gray-100 text-gray-800"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered bg-gray-100 text-gray-800"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
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
                  placeholder="••••••••"
                  className="input input-bordered bg-gray-100 text-gray-800"
                  required
                />
                <label className="label">
                  <span className="label-text-alt">Must be at least 8 characters</span>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create Account</button>
              </div>
              
              <div className="text-center mt-4">
                <p>Already have an account? <Link to="/signin" className="link link-primary">Sign In</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;