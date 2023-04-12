import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const JobDetails = () => {
  
  const { id } = useParams();
  const jobDetails = useLoaderData()
  //console.log(jobDetails);
  console.log(id);
  const jobs = jobDetails.find(singleJob => singleJob.id.toString() === id)
  console.log(jobs);

  return (
    <div>
      <h1 className="text-center font-semibold text-4xl bg-gray-200 py-10 ">
        Job Details
      </h1>
      <Details details={jobs}></Details>
    </div>
  );
};

export default JobDetails;
