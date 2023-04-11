import React from "react";


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
      <section className="lg:flex  lg:grid-cols-4 gap-6 lg:mx-20 py-10 my-5">
        {category?.map((singleData) => (
          <div className="card w-96 bg-base-100 mx-5 my-10 shadow-xl">
            <figure>
              <img src={singleData.categoryLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleData.categoryName}</h2>
              <p>{singleData.availableJob} Jobs Available</p>
            </div>
          </div>
        ))}

        {/* <div className="card w-96 bg-base-100 mx-5 my-10 shadow-xl">
          <figure>
            <img src={Design} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Creative Design</h2>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 mx-5 my-10 shadow-xl">
          <figure>
            <img src={Marketing} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Marketing & Sales</h2>
            <p>150 Jobs Available </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 mx-5 my-10 shadow-xl">
          <figure>
            <img className="ms-0" src={Chip} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Engineering Job</h2>
            <p>224 Jobs Available</p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default JobCategory;
