import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div className="navbar bg-base-100 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/statistics">
                  <span className="text">Statistics</span>
                </Link>
              </li>
              <li>
                <Link to="/apply">Applied Job</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>

          <Link className="btn btn-ghost normal-case text-4xl ms-10 lg:ms-16 " to="/">
            JobSpot
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/statistics">
                <span className="text">Statistics</span>
              </Link>
            </li>
            <li>
              <Link to="/apply">Applied Job</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:pe-16">
          <button className="button">Start Applying</button>
        </div>
      </div>
    );
};

export default Header;




/*
<div className="bg-gray-200 py-3">
        <nav className="flex space-x-60 items-center h-20 bg-gray-200">
          <div>
            <h1 className="text-3xl font-bold ms-24">
              <Link to="/">JobSpot</Link>
            </h1>
          </div>
          <div className="flex space-x-16 text-lg">
            <Link to="/statistics">
              <span className='text'>Statistics</span>
            </Link>
            <Link to="/apply">Applied Job</Link>
            <Link to="/blogs">Blog</Link>
          </div>
          <div>
            <button className="button text-white items-center font-bold py-2 px-4 rounded">
              Start Applying
            </button>
          </div>
        </nav>
      </div>
*/