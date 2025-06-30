import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from './header';
import Footer from './footer';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <section className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center">
      <div className="mb-10">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent p-2 rounded-lg">
          <span className="font-bold text-[45px]">ABOUT.ME</span>
        </div>
      </div>
      <div className="loader"></div>
    </section>
  ) : (
    <>
      <Header />

      <section className="relative bg-black text-white min-h-screen w-full flex items-center justify-center p-8 pt-24 md:pt-0">
        <div className="absolute w-full inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-30"></div>
        <div className="relative z-10 text-left max-w-5xl ml-15 mt-40 mr-auto">

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-[85px] font-bold leading-30 mb-10">
              This is just to  <span className="bg-white text-black px-4 rounded-lg">Show </span> My Routing Ability.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg md:text-[18px] max-w-[550px] mb-8">
              I'm William Rey – a passionate developer crafting unique and effective digital experiences since 2013. From agency work to personal ventures, I combine creativity and code to deliver high-quality results.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200">
              View Portfolio
            </button>
          </motion.div>

        </div>

        
      </section>

      <section className="relative bg-black text-white py-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 opacity-30 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-[85px] font-bold mb-8 leading-30">
            A Decade of <span className="bg-white text-black px-4 rounded-lg">Coding</span> <br />
            Experience Since <span className="bg-white text-black px-4 rounded-lg">2013</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Over the years, I’ve built everything from sleek marketing websites to complex web apps — always with a focus on performance, accessibility, and pixel perfection.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
