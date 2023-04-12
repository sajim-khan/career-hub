import React from "react";
import { useParams } from "react-router-dom";


const JobCategory = ({ category }) => {

  return (
    <div>
      <h1 className="text-center text-4xl mt-20 font-sans font-bold pb-7">
        Job Category List
      </h1>
      <p className="text-center pb-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <section className="lg:flex lg:grid-cols-4 lg:mx-20 py-10 my-5">
        {category?.map((singleData) =>  (
          <div className="card w-96 bg-base-100 mx-5 my-10 shadow-xl">
            <div className="justify-start ms-8">
              <img className="justify-start w-12" src={singleData.categoryLogo} />
            </div>

            <div className="card-body">
              <h2 className="card-title">{singleData.categoryName}</h2>
              <p>{singleData.availableJob} Jobs Available</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobCategory;
