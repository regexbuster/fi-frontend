// routes/profile-setup/ProfileSetup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileSetup() {
  // State for form data
  const [formData, setFormData] = useState({
    nationality: "",
    userType: "applicant", // Default to applicant
    resume: null,
    companyName: "",
    jobDescription: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Navigate to the next page based on user type
    // This is a placeholder - you would replace with actual navigation
    if (formData.userType === "applicant") {
      // Navigate to applicant dashboard
    } else {
      // Navigate to recruiter dashboard
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/signup" className="btn btn-ghost">
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

      {/* Profile Setup Form */}
      <div className="bg-base-200 min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6 text-center">Complete Your Profile</h2>
              <p className="text-center mb-8">Please provide some additional information to help us personalize your experience.</p>
              
              <form onSubmit={handleSubmit}>
                {/* Nationality Field */}
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Nationality</span>
                  </label>
                  <select 
                    className="select select-bordered w-full bg-gray-100" 
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select your nationality</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="japan">Japan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* User Type Toggle */}
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="label-text">I am a:</span>
                  </label>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-10">
                      <label className={`cursor-pointer flex items-center space-x-2 ${formData.userType === 'applicant' ? 'text-primary font-bold' : ''}`}>
                        <input 
                          type="radio" 
                          name="userType" 
                          value="applicant"
                          checked={formData.userType === "applicant"}
                          onChange={handleChange}
                          className="radio radio-primary" 
                        />
                        <span>Job Applicant</span>
                      </label>
                      <label className={`cursor-pointer flex items-center space-x-2 ${formData.userType === 'recruiter' ? 'text-primary font-bold' : ''}`}>
                        <input 
                          type="radio" 
                          name="userType" 
                          value="recruiter"
                          checked={formData.userType === "recruiter"}
                          onChange={handleChange}
                          className="radio radio-primary" 
                        />
                        <span>Job Recruiter</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Conditional Fields based on User Type */}
                {formData.userType === "applicant" ? (
                  // Applicant-specific fields
                  <div className="form-control mb-6 transition-all duration-300">
                    <label className="label">
                      <span className="label-text">Upload Your Resume (PDF)</span>
                    </label>
                    <input 
                      type="file" 
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="file-input file-input-bordered w-full bg-gray-100" 
                    />
                    <label className="label">
                      <span className="label-text-alt">Max file size: 5MB</span>
                    </label>
                  </div>
                ) : (
                  // Recruiter-specific fields
                  <div className="space-y-6 transition-all duration-300">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Company Name</span>
                      </label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g., Acme Corporation"
                        className="input input-bordered w-full bg-gray-100 text-gray-800" 
                        required={formData.userType === "recruiter"}
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Job Description</span>
                      </label>
                      <textarea 
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        placeholder="Briefly describe the position you're recruiting for..."
                        className="textarea textarea-bordered bg-gray-100 text-gray-800 h-32" 
                        required={formData.userType === "recruiter"}
                      ></textarea>
                    </div>
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="form-control mt-8">
                  <button type="submit" className="btn btn-primary">
                    Complete Setup
                  </button>
                </div>
              </form>
              
              {/* Progress Indicator */}
              <div className="flex justify-center mt-6">
                <ul className="steps">
                  <li className="step step-primary">Sign Up</li>
                  <li className="step step-primary">Profile</li>
                  <li className="step">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetup;