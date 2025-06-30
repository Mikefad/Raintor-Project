import React from 'react';
import { useState, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import Header from './header';
import MySkills from './skills';
import WorkProcess from './work';
import ContactSection from './contact';
import Footer from './footer';

const HeroSection = () => {
    

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        isLoading ? (
            
            <section className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center">
            
            <div className="mb-10">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent p-2 rounded-lg mr-2">
                <span className="font-bold text-[45px]">DEVLOP.ME</span>
                </div>
            </div>
            
            <div className="mb-10">
            
            <div className="loader"></div> 
            </div>

            
            
            </section>

          
        ) : (
          <div className='overflow-hidden'>

    <Header/>

    <section className="relative bg-black text-[#b2eee7] min-h-screen w-full flex items-center justify-center p-6 pt-16 md:pt-0 lg:pt-24">
    
    <div className="absolute w-full inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-30"></div>

    <div className="relative z-10 text-center max-w-5xl mx-auto mt-3 md:mt-10 px-4">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        >
        <h1 className="text-[35px] sm:text-4xl md:text-[70px] lg:text-[80px] text-left font-bold sm:leading-relaxed md:leading-[90px] lg:leading-[110px] mb-10">
        
        <div className="block lg:hidden">
            <div>
            Trusted <span className="bg-white text-black px-4 rounded-lg">Partner</span>
            </div>
            for Your Website <span className="bg-white text-black px-4 rounded-lg">Develop.</span>
        </div>

        
        <div className="hidden lg:block">
            <div>
            Trusted <span className="bg-white text-black px-4 rounded-lg">Partner</span> for
            </div>
            Your Website <span className="bg-white text-black px-4 rounded-lg">Develop.</span>
        </div>
        </h1>

        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 text-left">
            <div className="p-4 sm:p-10">
            @william rey
            </div>

            <div>
            <p className="text-base sm:text-lg md:text-[18px] max-w-[550px] mb-6">
                Building the world's best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200">
                Schedule a Call
            </button>
            </div>
        </div>
        </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-gray-950 z-20" />
    </section>


    <MySkills/>

    

    <section className="relative bg-black text-[#b2eee7] py-30 px-4 sm:px-6 md:px-8 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 opacity-30 z-0" />

    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-black z-10" />

    <div className="relative z-10 max-w-6xl mx-auto">
        
        <h2 className="text-4xl sm:text-6xl md:text-[85px] max-w-5xl mx-auto text-center font-bold mb-8 leading-tight">
        I've been <span className="bg-white text-black px-4 rounded-lg">Developing</span>
        <div className="typing-animation mt-2">
            Websites since <span className="bg-white text-black px-4 rounded-lg">2013</span>
        </div>
        </h2>

        
        <p className="text-base sm:text-lg md:text-xl text-center mx-auto mb-15 max-w-2xl">
        We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
        </p>

        
        <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="text-white px-6 py-3 text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            PREVIOUSLY WORKED ON
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:flex gap-6 items-start justify-center">
        
        <div className="lg:flex lg:flex-col grid grid-cols-2 items-center gap-4">
            <div className="bg-gray-700 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-full text-base sm:text-lg shadow-lg md:self-start lg:translate-x-16 lg:translate-y-5 lg:rotate-[23deg]">
            awwardds.
            </div>
            <div className="bg-gray-700 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-full text-base sm:text-lg shadow-lg md:self-end">
            facebook
            </div>
        </div>

        
        <div className="lg:flex lg:flex-col grid grid-cols-2 items-center gap-4">
            <div className="bg-gray-700 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-full text-base sm:text-lg shadow-lg md:self-start lg:translate-x-32 lg:-translate-y-1">
            CSSWINNER
            </div>
            <div className="bg-gray-700 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-full text-base sm:text-lg shadow-lg lg:self-end lg:-rotate-[17deg]">
            /thoughtworks
            </div>
        </div>

        
        <div className="lg:flex lg:flex-col grid grid-cols-2">
            <div className="bg-gray-700 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-full text-base sm:text-lg shadow-lg lg:self-start lg:translate-x-20  lg:translate-y-8 lg:rotate-[23deg]">
            AUTODESK
            </div>
            <div className="bg-gray-700 text-white px-6 sm:px-9 py-3 sm:py-5 rounded-full text-base sm:text-lg shadow-lg lg:self-end lg:-translate-x-7 lg:translate-y-4">
            /AUTODESK
            </div>
        </div>
        </div>


        </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-950 z-20" />
    </section>


    <WorkProcess/>
    <ContactSection/>

    <Footer/>

    </div>
  )
)};

export default HeroSection;