import React, { useState } from "react";
import JobDetails from "../Job Details/JobDetails";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const AppliedJob = () => {

const {pathname} = useLocation()
console.log(pathname);

const [isRemote, setIsRemote] = useState()

const appliedJobs = useLoaderData()
console.log(appliedJobs);

  return (
    <section>
      <div>
        <h1 className="text-center font-semibold text-4xl bg-gray-200 py-10 ">
          Applied Job
        </h1>
      </div>
      <div className="py-5">
        {appliedJobs?.length > 0 ? (
          appliedJobs?.map((item) => (
            <div
              key={item.id}
              className="card card-side bg-base-100 mx-20 shadow-xl"
            >
              <figure className="p-5">
                <img className="w-48" src={item.companyLogo} />
              </figure>
              <div className="card-body  justify-between mb-5">
                <div>
                  <p className="mb-4 text-2xl font-bold">{item.jobTitle}</p>
                  <h2 className="card-title mb-5">{item.companyName}</h2>

                  <button className="me-5 button">{item.remoteOrOnsite}</button>
                  <button className="button">{item.fullTimeOrPartTime}</button>
                  <div className=" my-5">
                    <p className="my-3">Address: {item.location}</p>
                    <p>Salary : {item.salary}</p>
                  </div>
                </div>
                <div className="card-actions lg:justify-end">
                  <Link to={`/details/${item.id}`} className="button">
                    View Details
                  </Link>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>you did not apply any jobs</h3>
        )}
      </div>
    </section>
  );
};
export default AppliedJob;

