import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MySkills = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const textRef = useRef(null);
    const isInView2 = useInView(textRef, { once: true });

  const skills = [
    {
      title: 'HTML & CSS',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.',
      icon: (
        <svg
          className="w-12 h-12 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
    },
    {
      title: 'Javascript',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.',
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 14c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.5 17.5c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12.5c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3z"
          ></path>
        </svg>
      ),
    },
    {
      title: 'Webflow',
      description: 'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.',
      icon: (
        <svg
          className="w-12 h-12 text-purple-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-[#b2eee7] py-16 px-4 sm:px-6 md:px-8">
  <div className="max-w-6xl mx-auto">
    
    {/* Button */}
    <div className="mb-10">
      <button className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200">
        Schedule a Call
      </button>
    </div>

    {/* Title and Description */}
    <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="md:w-2/3"
      >
        <h2 className="text-3xl sm:text-5xl md:text-[60px] font-semibold leading-tight">
          My Extensive List of Skills
        </h2>
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="md:w-1/3"
      >
        <p className="text-base sm:text-lg mb-4">
          Building the world's best marketing websites. Your trusted partner for strategy, design, and dev.
        </p>
        <hr className="mt-4 border-gray-700 w-full" />
      </motion.div>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center text-center transition-transform duration-500 ${
            skill.title === "Javascript" ? "rotate-12" : ""
          }`}
        >
          {skill.icon}
          <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
          <p className="text-gray-400 text-sm">{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default MySkills;