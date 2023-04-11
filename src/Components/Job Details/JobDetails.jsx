import React from "react";

const JobDetails = () => {
  return (
    <section>
      <h1 className="text-center font-semibold text-4xl bg-gray-200 py-10 ">
        Job Details
      </h1>
      <div className="flex mx-4 lg:mx-32  gap-8 my-20">
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
          <div className="card w-96 bg-gray-200 mx-4 shadow-xl">
            <div className="card-body text-start">
              <h2 className="card-title">Job Details</h2>
              <p>
                <span className="font-bold">Salary : </span> 100k{" "}
              </p>
              <p>
                <span className="font-bold">Job Title : </span> Product Designer
              </p>
              <h2 className="card-title py-3">Contact Information</h2>
              <p>
                <span className="font-bold">Phone : </span> 89437824687
              </p>
              <p>
                <span className="font-bold">Email : </span>
                info@gmail.com
              </p>
              <p>
                <span className="font-bold">Address : </span>
                Dhaka, Bangladesh
              </p>
              <div className="card-actions">
                <button className="button mt-5">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
