import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    
  const { error, status } = useRouteError();
  //console.log(error.message);
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className=" flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h1 className="mb-4 font-extrabold text-5xl text-gray-700">Opps!!</h1>
          <h2 className="mb-8 font-extrabold text-6xl text-gray-700">
            <span className="sr-only">Error</span> Error {status}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-700 text-gray-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;