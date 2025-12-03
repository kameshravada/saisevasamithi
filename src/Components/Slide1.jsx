import React from "react";

const Slide1 = () => {
  return (
    <div className='relative w-full h-full bg-[url("/images/slide1.jpeg")] bg-cover bg-center'>
      <section className="h-full flex flex-col justify-end pb-12 items-start px-6 md:px-14 bg-black/30 z-10  bg-cover bg-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-bold mb-4">
          Selfless Service, Inspired by Sai
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
          At <span className="text-yellow-300">Sai margam</span>, we follow the
          divine path shown by Bhagawan Sri Sathya Sai Baba, serving communities
          through education, healthcare, rural upliftment, and spiritual
          harmony.
        </p>
        <div className="flex space-x-4 text-sm md:text-lg lg:text-xl">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 sm:py-2 px-2 sm:px-6 rounded cursor-pointer">
            Join as Volunteer
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-semibold py-1 sm:py-2 px-2 sm:px-6 rounded cursor-pointer ">
            Our Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default Slide1;
