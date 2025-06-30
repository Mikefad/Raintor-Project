
import React from 'react';

const ContactSection = () => {
  return (
    
    <section className="relative bg-black text-white py-60 px-8 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-30 z-0"></div>

    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-black z-10" />
    
    <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-gray-950 z-20" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in work together?</h2>
          <p className="text-lg md:text-xl mb-8">
            We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200">
            Schedule a Call
          </button>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Enter your name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Your email address</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="sr-only">Describe your project</label>
              <textarea
                id="description"
                rows="5"
                placeholder="Describe your project"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Send
              </button>
              <button
                type="button"
                className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
              >
                Contact me
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            
            <p className="text-gray-400">@williamrey</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-b from-transparent to-gray-950 z-20" />

    </section>
  );
};

export default ContactSection;