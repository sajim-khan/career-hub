import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div className="bg-gray-200">
        <nav className="flex space-x-72 items-center h-24 bg-gray-200">
          <div>
            <h1 className="text-3xl font-bold ms-14">
              <Link to="/">JobSpot</Link>
            </h1>
          </div>
          <div className="flex space-x-16 text-lg">
            <Link to="/statistics">Statistics</Link>
            <Link to="/apply">Applied Job</Link>
            <Link to="/blogs">Blog</Link>
          </div>
          <div>
            <button className="button text-white items-center font-bold py-2 px-4 rounded">
              Start Applying
            </button>
          </div>
        </nav>

        <section>
          <h1>djf</h1>
        </section>
      </div>
    );
};

export default Header;