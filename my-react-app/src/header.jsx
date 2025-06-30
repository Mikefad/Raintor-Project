
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <header className="text-white py-4 px-4 sm:px-6 md:px-8 fixed top-0 w-full z-50">
    <div className={`w-full max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6 rounded-full transition-colors duration-300 backdrop-blur-md overflow-hidden  ${isScrolled ? "bg-[#181823]/90" : "bg-gray-200/10"}`}>

        
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mr-2">
            <span className="font-bold text-lg">DEVLOP.ME</span>
          </div>
        </div>

        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </nav>

        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        
        <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
          Start Project
        </button>
      </div>

      
      {isMobileNavOpen && (
        <div className="md:hidden mt-4 bg-[#181823]/90 backdrop-blur-md rounded-xl mx-4 p-4 text-white space-y-4">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/about" className="block hover:text-gray-300">About</Link>
          <a href="#" className="block hover:text-gray-300">Portfolio</a>
          <a href="#" className="block hover:text-gray-300">Blog</a>
          <button className="w-full bg-white text-black py-2 rounded-full mt-2 hover:bg-gray-200">
            Start Project
          </button>
        </div>
      )}
    </header>


    
  );
};

export default Header;