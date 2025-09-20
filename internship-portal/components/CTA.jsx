"use client"

import React from 'react';
import Image from 'next/image';

const CTA = () => {
  return (
    <div className='bg-black flex justify-center'>

    <section className="bg-gradient-to-r w-6xl from-green-500 to-green-700 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl m-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <p className="text-sm font-semibold mb-2 flex items-center justify-center lg:justify-start">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Let your resume speak for you
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Upload and Get <br /> Instant Insights
          </h2>
          <p className="text-lg sm:text-xl font-light mb-8 max-w-md mx-auto lg:mx-0">
            Transform your resume into actionable insights. Our AI-powered
            analysis helps you understand what employers see and how to
            improve your chances.
          </p>
          <button className="bg-white cursor-pointer text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center lg:justify-start mx-auto lg:mx-0">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              ></path>
            </svg>
            Parse My Resume
          </button>
        </div>

        {/* Right Section  */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
          
            <div className="relative w-full h-64">
              <Image
                src="/resume-illustration.png" 
                alt="Resume insights illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
                </div>
  );
};

export default CTA;