import React from "react";
import Chip from "../../assets/Icons/chip 1.png";
import Accounts from "../../assets/Icons/accounts 1.png";
import Marketing from "../../assets/Icons/social-media 1.png";
import Design from "../../assets/Icons/business 1.png";

const JobCategory = (props) => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-20 font-sans font-bold pb-7">
        Job Category List
      </h1>
      <p className="text-center pb-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <section className="lg:flex gap-6 lg:mx-20 py-10 my-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Accounts} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Account & Finance</h2>
            <p>300 Jobs Available</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Design} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Creative Design</h2>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Marketing} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Marketing & Sales</h2>
            <p>150 Jobs Available </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="ms-0" src={Chip} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Engineering Job</h2>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobCategory;
