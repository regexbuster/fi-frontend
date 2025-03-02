// routes/review/Review.jsx
import React from "react";
import { Link } from "react-router-dom";

function Review() {
  // This would ideally come from a global state or backend
  // For now, using sample data for demonstration
  const selectedCompanies = [
    {
      id: 1,
      company: "TechNova",
      position: "Frontend Developer",
      feedback: "Great cultural fit! Work on highlighting your React experience and responsive design projects.",
      interviewDate: "March 5, 2025",
      interviewTime: "10:30 AM"
    },
    {
      id: 3,
      company: "GrowthX",
      position: "Marketing Specialist",
      feedback: "Strong potential match. Consider preparing examples of your data-driven marketing campaigns.",
      interviewDate: "March 7, 2025",
      interviewTime: "2:00 PM"
    }
  ];

  const pastCompanies = [
    {
      id: 101,
      company: "CloudNet",
      position: "Software Engineer",
      feedback: "Technical skills were impressive, but could improve on communication of complex concepts."
    },
    {
      id: 102,
      company: "EcoSolutions",
      position: "Web Developer",
      feedback: "Good presentation, need to work on specific examples of problem-solving approaches."
    },
    {
      id: 103,
      company: "FinTech Partners",
      position: "UI/UX Designer",
      feedback: "Portfolio was strong but lacked financial industry work. Focus on learning industry terminology."
    }
  ];

  return (
    <>
      {/* Navbar with updated menu */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link to="/networking">Networking</Link></li>
              <li><Link to="/review">Review</Link></li>
              <li><a>Reflection</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">FirstImpression</Link>
        </div>
        <div className="navbar-end">
          <Link to="/signin" className="btn btn-ghost mr-2">Sign In</Link>
          <button className="btn btn-ghost btn-rounded">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-base-200 min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-center mb-10">Your Networking Review</h1>
          
          {/* Current Interests Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Current Interests</h2>
            
            {selectedCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCompanies.map(company => (
                  <div key={company.id} className="card bg-base-100 shadow-md">
                    <div className="card-body">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="card-title">{company.company}</h3>
                          <p className="text-sm text-gray-500">{company.position}</p>
                        </div>
                        <div className="badge badge-primary">Current</div>
                      </div>
                      
                      {/* Interview Time Section */}
                      <div className="bg-base-200 p-3 rounded-lg mt-3">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <p className="font-medium">Interview Scheduled</p>
                            <p className="text-sm">{company.interviewDate} at {company.interviewTime}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="divider my-2"></div>
                      
                      <div>
                        <h4 className="font-semibold">Preparation Tips:</h4>
                        <p>{company.feedback}</p>
                      </div>
                      
                      <div className="card-actions justify-end mt-4">
                        <button className="btn btn-sm btn-outline">Reschedule</button>
                        <button className="btn btn-sm btn-primary">Prepare</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
                <p>You haven't selected any companies yet. <Link to="/networking" className="link link-primary">Return to networking</Link> to find matches!</p>
              </div>
            )}
          </div>
          
          {/* Past Companies Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Past Connections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastCompanies.map(company => (
                <div key={company.id} className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title">{company.company}</h3>
                        <p className="text-sm text-gray-500">{company.position}</p>
                      </div>
                      <div className="badge badge-secondary">Past</div>
                    </div>
                    
                    <div className="divider my-2"></div>
                    
                    <div>
                      <h4 className="font-semibold">Areas for Improvement:</h4>
                      <p>{company.feedback}</p>
                    </div>
                    
                    <div className="card-actions justify-end mt-4">
  <button className="btn btn-sm btn-outline">Reschedule</button>
  <Link to="/conference" className="btn btn-sm btn-primary">Join Call</Link>
</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-12 flex justify-center gap-4">
            <Link to="/networking" className="btn btn-outline">
              Back to Networking
            </Link>
            <button className="btn btn-primary">
              Export Summary
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;