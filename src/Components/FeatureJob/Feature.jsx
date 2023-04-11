import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {
  return (
    <div className="card w-96 bg-base-100 mx-4 shadow-xl my-5">
      <div className="card-body">
        <img src={feature.companyLogo} />
        <h2 className="card-title"></h2>
        <p>Google Inc</p>
        <div className="py-3">
          <button className="py-2 px-5 rounded-lg text-indigo-400 md:text-sm text-sm font-semibold border-indigo-400 border-2 me-5">
            Remote
          </button>
          <button className="py-2 px-5 rounded-lg text-indigo-400 md:text-sm text-sm font-semibold border-indigo-400 border-2 ">
            Full Time
          </button>
        </div>
        <div className="flex">
          <p></p>
          <p>Salary : 100k - 150k</p>
        </div>
        <div className="card-actions justify-start my-5">
          <Link to="/details">
            <button className="button">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;