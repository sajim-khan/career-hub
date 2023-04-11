import React from "react";
import JobDetails from "../Job Details/JobDetails";

const AppliedJob = () => {
  return (
    <section>
      <div>
        <h1 className="text-center font-semibold text-4xl bg-gray-200 py-10 ">
          Applied Job
        </h1>
      </div>
      <div className="dropdown dropdown-right ms-20">
        <label tabIndex={0} className="btn btn-primary m-2">
          Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="card card-side bg-base-100 mx-20 shadow-xl">
          <figure className="p-5">
            <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body  justify-between">
            <div>
              <h2 className="card-title mb-3">Technical database engineer</h2>
              <p className="mb-4">Google Inc</p>
              <button className="me-5 button">Remote</button>
              <button className="button">Full Time</button>
              <div className=" my-5">
                <p className="my-3">Dhaka, Bangladesh</p>
                <p>Salary : 100k - 150k</p>
              </div>
            </div>
            <div className="card-actions items-center lg:justify-end">
              <button className="button">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppliedJob;

