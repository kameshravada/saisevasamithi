import React from "react";

const Slide4 = () => {
  return (
    <div className='relative w-full h-full bg-[url("/images/slide4.jpeg")] bg-cover bg-center'>
      <section className="h-full flex flex-col justify-end pb-12 items-start px-6 md:px-14 bg-black/30 z-10  bg-cover bg-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Inspiring Through Real Connections
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-xl max-w-2xl md:mb-6">
          We believe young minds grow when they meet real role models. Taking
          students to meet inspiring leaders opens their eyes to new
          possibilities and plants seeds of confidence and ambition.
        </p>
        {/* <div className="flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded">
            Join as Volunteer
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded">
            Our Projects
          </button>
        </div> */}
      </section>
    </div>
  );
};

export default Slide4;
