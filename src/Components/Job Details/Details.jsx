import React from "react";
import { addToDb } from "../../utilities/fakedb";

const Details = ({ details }) => {
  const {
    id,
    jobDescription,
    jobResponsibility,
    email,
    phone,
    experiences,
    jobTitle,
    salary,
    educationalRequirements,
    location,
  } = details;

  const applyButtonHandler = () => {
    console.log(id)
    addToDb(id)
  };

  return (
    <div className="sm:flex grid grid-cols-1 mx-4 lg:mx-32  gap-8 my-20">
      <div>
        <p className="pb-5">
          <span className="text-1xl font-bold">Job Description: </span>
          {jobDescription}
        </p>
        <p className="pb-5">
          <span className="text-1xl font-bold">Job Responsibility: </span>
          {jobResponsibility}
        </p>
        <h1 className="text-1xl font-bold pb-3">Educational Requirements:</h1>
        {educationalRequirements}
        <h1 className="text-1xl font-bold py-3">Experience:</h1>
        {experiences}
      </div>

      <div>
        <div className="card w-96 bg-gray-200 mx-4 shadow-xl">
          <div className="card-body text-start">
            <h2 className="card-title">Job Details</h2>
            <p>
              <span className="font-bold">Salary : </span> {salary}
            </p>
            <p>
              <span className="font-bold">Job Title : </span> {jobTitle}
            </p>
            <h2 className="card-title py-3">Contact Information</h2>
            <p>
              <span className="font-bold">Phone : </span>
              {phone}
            </p>
            <p>
              <span className="font-bold">Email : </span>
              {email}
            </p>
            <p>
              <span className="font-bold">Address : </span>
              {location}
            </p>
            <div className="card-actions">
              <button onClick={applyButtonHandler} className="button mt-5">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
