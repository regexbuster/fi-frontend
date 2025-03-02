// routes/main/App.jsx
import { Link } from "react-router-dom";

function App() {
  return (
    <>
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
              <li><Link to="/review">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">FirstImpression</a>
        </div>
        <div className="navbar-end">
          <Link to="/signin" className="btn btn-ghost mr-2">Sign In</Link>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Right way Networking.</h1>
            <p className="py-6">Forget about the days of not getting motion.</p>
            <Link to="/signin" className="btn btn-primary">Lets Get Started!</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;