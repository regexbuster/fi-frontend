// routes/conference/Conference.jsx
import React from "react";
import { Link } from "react-router-dom";

function Conference() {
  return (
    <>
      {/* Navbar consistent with other pages */}
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

      {/* Video Conference Layout */}
      <div className="bg-base-200 min-h-screen flex items-center justify-center py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-6 h-[500px]">
            {/* Left Video Square */}
            <div className="flex-1 bg-base-100 rounded-lg shadow-lg flex flex-col">
              {/* Video Feed */}
              <div className="flex-1 bg-gray-800 rounded-t-lg relative flex items-center justify-center">
                {/* Placeholder for video */}
                <div className="text-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg">Your Camera</p>
                </div>
                
                {/* Camera controls overlay with additional buttons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  {/* Toggle switch icon */}
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </button>
                  {/* Three dots/more icon */}
                  <button className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                  <button className="btn btn-circle btn-sm btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Name tag */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">You</span>
                </div>
              </div>
              
              {/* Control Panel */}
              <div className="p-3 flex justify-between items-center">
                <div>
                  <span className="badge badge-success">Connected</span>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-xs">Share Screen</button>
                  <button className="btn btn-xs btn-primary">Settings</button>
                </div>
              </div>
            </div>
            
            {/* Right Video Square */}
            <div className="flex-1 bg-base-100 rounded-lg shadow-lg flex flex-col">
              {/* Video Feed */}
              <div className="flex-1 bg-gray-800 rounded-t-lg relative flex items-center justify-center">
                {/* Placeholder for video */}
                <div className="text-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg">Waiting for TechNova Interviewer...</p>
                </div>
                
                {/* Name tag */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">Interviewer</span>
                </div>
              </div>
              
              {/* Status Panel */}
              <div className="p-3 flex justify-between items-center">
                <div>
                  <span className="badge badge-warning">Waiting</span>
                </div>
                <div>
                  <p className="text-sm">Interview starts in: <span className="font-bold">2:45</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conference;