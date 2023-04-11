import React, { useEffect, useState } from 'react';
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import FeatureJob from '../FeatureJob/FeatureJob';
import { useLoaderData } from 'react-router-dom';
import Img from '../../../public/assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
//load feature job data
const featureJob = useLoaderData()
//console.log(featureJob);

const [category, setCategory] = useState([])

useEffect(() => {
  fetch("category.json")
    .then((response) => response.json())
    .then((data) => setCategory(data));
}, []);
//console.log(category);

    return (
      <section>
        <div className="hero bg-gray-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse lg:ps-24 ">
            <img src={Img} className="max-w-sm rounded-lg  img me-20 " />
            <div className="lg:w-1/2 sm:mx-5">
              <h1 className="text-4xl font-bold">
                Education And Employment
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
        <JobCategory key={category.id} category={category}></JobCategory>
        <FeatureJob featureJob={featureJob}></FeatureJob>
      </section>
    );
};
export default Home;




