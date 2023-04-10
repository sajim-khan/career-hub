import React from "react";
import { Link } from "react-router-dom";

const FeatureJob = () => {
  return (
    <div>
      <p className="text-center text-4xl mt-20 font-sans font-bold pb-7 mx-24">
        Featured Jobs
      </p>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <section className="col flex-cols-2 lg:flex  gap-24 lg:mx-48 py-10 my-5">
        <div className="card w-96 bg-base-100 shadow-xl my-5">
          <figure>
            <img src="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical database engineer</h2>
            <p>Google Inc</p>
            <div>
              <button>Remote</button>
              <button>Full Time</button>
            </div>
            <div className="flex">
              <p>Dhaka, Bangladesh</p>
              <p>Salary : 100k - 150k</p>
            </div>
            <div className="card-actions justify-start my-5">
              <button className="button">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical database engineer</h2>
            <p>Google Inc</p>
            <div>
              <button>Remote</button>
              <button>Full Time</button>
            </div>
            <div className="flex">
              <p>Dhaka, Bangladesh</p>
              <p>Salary : 100k - 150k</p>
            </div>
            <div className="card-actions justify-start my-5">
              <button className="button">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl my-5">
          <figure>
            <img src="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical database engineer</h2>
            <p>Google Inc</p>
            <div>
              <button>Remote</button>
              <button>Full Time</button>
            </div>
            <div className="flex">
              <p>Dhaka, Bangladesh</p>
              <p>Salary : 100k - 150k</p>
            </div>
            <div className="card-actions justify-start my-5">
              <Link to='/details'><button className="button">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureJob;
