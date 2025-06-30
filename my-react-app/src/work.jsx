
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WorkProcess = () => {    

    const textRef = useRef(null);
    const isInView2 = useInView(textRef, { once: true });

  const processes = [
    {
      title: 'Discovery',
      description: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
      color: 'bg-[#c5ffee]',
    },
    {
      title: 'Strategy',
      description: 'Every end-to-end project of sure begins with a bespoke pre-build strategy. From brand ID consultation to in-depth goals reviews we’re here to set the stage for success.',
      color: 'bg-[#c5ffee]',
    },
    {
      title: 'Design',
      description: 'After we have a comprehensive understanding of your brand, we’ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.',
      color: 'bg-[#c5ffee]',
    },
    {
      title: 'Build',
      description: 'Whether we’ve just finished designing your new site or you’re handing off finished designs for us to develop in Webflow, we’re here to apply our trusted development process to your project.',
      color: 'bg-[#c5ffee]',
    },
  ];

  return (
    <section className="bg-black text-[#b2eee7] py-20 px-8">
        
      <div className="max-w-6xl mx-auto ">
        


        
        <div className="mb-12">
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200">
            Schedule a Call
            </button>
        </div>
    
        
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
            <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:flex-1 pl-4"
            > 
            <h2 className="text-4xl md:text-7xl text-center font-lg mb-10">
                My Work Process
            </h2>

            </motion.div>
    
            
        </div>


        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <div key={index} className={`bg-[343638] p-8 rounded-lg shadow-md shadow-gray-800 ${
                process.title === "Strategy" ? 'rotate-12' : ''
              }`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`px-3 py-1 rounded-full text-sm text-black font-semibold ${process.color}`} >{process.title}</h3>
                <span >
                  Read More
                </span>
                
              </div>
              <p className="text-gray-400">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

    

    </section>
  );
};

export default WorkProcess;