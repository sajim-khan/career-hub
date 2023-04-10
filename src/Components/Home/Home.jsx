import React from 'react';
import Img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    return (
      <section>
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse lg:ps-24 ">
            <img
              src={Img}
              className="max-w-sm rounded-lg shadow-2xl img me-20 lg:w-1/2"
            />
            <div className="lg:w-1/2 sm:mx-5">
              <h1 className="text-5xl font-bold">
                Education And Employment{" "}
                <span className="ttl">Resource Center</span>
              </h1>
              <p className="py-6 me-16">
                The Job Spot was designed as a multi-agency location created to
                better serve adults facing education and employment barriers in
                South Bakersfield. Hosting multiple resources in one spot, we
                try to eliminate the need for adults to travel to multiple
                locations for education and employment services.
              </p>
              <button className="button">Get Started</button>
            </div>
          </div>
        </div>
        <JobCategory></JobCategory>
      </section>
    );
};
export default Home;




/*
    <div className="flex justify-between bg-gray-200 py-5 gap-32 px-36 container">
        <div className="side-bar justify-center w-1/2">
          <h1>One Step Closer To Your Dream Job</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className='button text-white items-center font-bold py-2 px-4 rounded"'>
            Get Started
          </button>
        </div>
        <div className="img ">
          <img src={Img} alt="" />
        </div>
      </div>
*/