import React from "react";

const JobDetails = () => {
  return (
    <section>
      <h1 className="text-center font-semibold text-4xl bg-gray-200 py-10 ">
        Job Details
      </h1>
      <div className="flex mx-32 gap-8 my-20">
        <div>
          <p className="pb-5">
            <span className="text-1xl font-bold">Job Description: </span>A UI/UX
            designer is responsible for designing and creating engaging and
            effective interfaces for software and web applications.
          </p>
          <p className="pb-5">
            <span className="text-1xl font-bold">Job Responsibility: </span>A
            UI/UX designer is responsible for designing and creating engaging
            and effective interfaces for software and web applications.
          </p>
          <h1 className="text-1xl font-bold pb-3">Educational Requirements:</h1>
          <p className="pb-5">A UI/UX designer</p>
          <h1 className="text-1xl font-bold pb-3">Experience:</h1>
          <p className="pb-5">A UI/UX designer</p>
        </div>

        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="button">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
