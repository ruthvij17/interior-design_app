import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg shadow-md"
          >
            Back to Home
          </a>
        </div>
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/400x300?text=Oops!"
            alt="Page Not Found"
            className="mx-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
