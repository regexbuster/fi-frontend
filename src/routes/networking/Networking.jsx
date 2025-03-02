// routes/networking/Networking.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Networking() {
  // Sample job opportunities data
  const [jobOpportunities, setJobOpportunities] = useState([
    {
      id: 1,
      company: "TechNova",
      position: "Frontend Developer",
      description: "Looking for a skilled developer to join our innovative team building cutting-edge web applications."
    },
    {
      id: 2,
      company: "DataSphere",
      position: "Data Analyst",
      description: "Join our data team to extract valuable insights from complex datasets and drive business decisions."
    },
    {
      id: 3,
      company: "GrowthX",
      position: "Marketing Specialist",
      description: "Help us expand our digital presence through creative marketing campaigns and growth strategies."
    },
    {
      id: 4,
      company: "CloudPulse",
      position: "Cloud Solutions Architect",
      description: "Design and implement robust cloud infrastructure solutions for our enterprise clients."
    },
    {
      id: 5,
      company: "InnovateMind",
      position: "Product Manager",
      description: "Lead product development from conception to launch, working with diverse teams to deliver exceptional products."
    }
  ]);

  const [remainingSelections, setRemainingSelections] = useState(5);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleLike = () => {
    if (remainingSelections > 0) {
      setRemainingSelections(remainingSelections - 1);
      setSelectedCompanies([...selectedCompanies, currentJob]);
      moveToNextCard();
    }
  };

  const handleDisregard = () => {
    moveToNextCard();
  };

  const moveToNextCard = () => {
    if (currentCardIndex < jobOpportunities.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const currentJob = jobOpportunities[currentCardIndex];
  const hasMoreCards = currentCardIndex < jobOpportunities.length - 1;

  return (
    <>
      {/* Same navbar as other pages */}
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

      {/* Main content with vertically and horizontally centered content */}
      <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left column - Welcome message - now centered vertically */}
            <div className="w-full md:w-2/5">
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Hey Alex!</h1>
                <p className="text-xl mb-6">Here are several opportunities that might spark your interest!</p>
                
                <div className="stats shadow mx-auto md:mx-0">
                  <div className="stat">
                    <div className="stat-title">Remaining Selections</div>
                    <div className="stat-value text-primary">{remainingSelections}</div>
                    <div className="stat-desc">out of 5 maximum</div>
                  </div>
                </div>
                
                {/* Continue button */}
                <div className="mt-8 text-center md:text-left">
                  <Link to="/review" className="btn btn-secondary">
                    Continue to Review
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right column - Card stack - now with more space */}
            <div className="w-full md:w-3/5">
              {currentCardIndex < jobOpportunities.length ? (
                <>
                  <div className="card bg-base-100 shadow-lg relative mx-auto max-w-lg">
                    {/* Show "ghost" cards behind to create stack effect */}
                    {hasMoreCards && (
                      <>
                        <div className="card bg-base-100 shadow-lg absolute -bottom-1 -right-1 w-full h-full -z-10"></div>
                        <div className="card bg-base-100 shadow-lg absolute -bottom-2 -right-2 w-full h-full -z-20"></div>
                      </>
                    )}
                    
                    <div className="card-body">
                      <h2 className="card-title text-2xl">{currentJob.company}</h2>
                      <h3 className="text-lg font-medium">{currentJob.position}</h3>
                      <p>{currentJob.description}</p>
                      <div className="card-actions justify-end mt-4">
                        {/* Buttons in the requested order */}
                        <button 
                          onClick={handleLike} 
                          className={`btn btn-primary ${remainingSelections === 0 ? 'btn-disabled' : ''}`}
                        >
                          Interested
                        </button>
                        <button 
                          onClick={handleDisregard} 
                          className="btn btn-outline"
                        >
                          Disregard
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-6 text-gray-600">
                    You have {remainingSelections} selection{remainingSelections !== 1 ? 's' : ''} remaining
                  </p>
                </>
              ) : (
                <div className="card bg-base-100 shadow-lg mx-auto max-w-lg">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">All Done!</h2>
                    <p>You've reviewed all available opportunities.</p>
                    <div className="card-actions mt-4">
                      <Link to="/review" className="btn btn-primary">Continue to Review</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Networking;