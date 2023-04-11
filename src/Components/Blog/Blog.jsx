import React from 'react';

const Blog = () => {
    return (
      <div>
        <p className="text-center font-semibold text-3xl bg-gray-200 py-7 ">
          Question And Answer
        </p>
        <div className="mx-20 mt-10">
          <h1 className="text-2xl">When should you use context API?</h1>

          <p className="mb-5 mt-2">
            <span className="font-bold">Ans: </span>Context API is a feature in
            React, that allows to share data between components without the need
            to pass props. Context API should use When I need to passing props
            down in multiple components , when I need to manage a shared state
            that needs to be updated by different components and also When I
            want to create reusable components that will be use in my
            application.
          </p>
          <h1 className="text-2xl">What is custom Hook?</h1>
          <p className="mb-5 mt-2">
            <span className="font-bold">Ans: </span>Custom hook is a JavaScript
            function which start with "use" . Custom Hook contain stateful
            logic, side effects, reusable functionality that can be
            shared between components.
          </p>
          <h1 className="text-2xl">What is useRef? Why we use it?</h1>
          <p className="mb-5 mt-2">
            <span className="font-bold">Ans: </span>
          </p>
          <h1 className="text-2xl">What is useMemo? Why we use it?</h1>
          <p className="mt-2 mb-5">
            <span className="font-bold">Ans: </span>
          </p>
        </div>
      </div>
    );
};

export default Blog;
