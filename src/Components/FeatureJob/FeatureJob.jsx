import React from "react";
import { Link } from "react-router-dom";
import Feature from "./Feature";


const FeatureJob = ({ featureJob }) => {

const { companyLogo, companyName } = featureJob;
  return (
    <div>
      <p className="text-center text-4xl mt-20 font-sans font-bold pb-7 mx-24">
        Featured Jobs
      </p>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <section className="grid lg:grid-cols-2 lg:mx-48 my-5">
        {featureJob?.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
        <button className="btn btn-primary">Show all</button>
      </section>
    </div>
  );
};

export default FeatureJob;
