import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {

const {id,
  companyLogo,
  companyName,
  fullTimeOrPartTime,
  location,
  remoteOrOnsite,
  salary,
  jobTitle,
} = feature;
  return (
    <div className="card w-96 bg-base-100 mx-4 shadow-xl my-5">
      <div className="card-body">
        <img className="w-44 h-10 mb-3" src={companyLogo} />
        <h2 className="card-title"></h2>
        <p className="text-3xl font-bold">{jobTitle}</p>
        <p className="text-2xl font-bold">{companyName}</p>
        <div className="py-3">
          <button className="py-2 px-5 rounded-lg text-indigo-400 md:text-sm text-sm font-semibold border-indigo-400 border-2 me-5">
            {remoteOrOnsite}
          </button>
          <button className="py-2 px-5 rounded-lg text-indigo-400 md:text-sm text-sm font-semibold border-indigo-400 border-2 ">
            {fullTimeOrPartTime}
          </button>
        </div>
        <div className="flex">
          <p>{location}</p>
          <p>Salary : {salary}</p>
        </div>
        <div className="card-actions justify-start my-5">
          <Link to={`/details/${id}`}>
            <button className="button">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;