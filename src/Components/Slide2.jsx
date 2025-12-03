import React from "react";

const Slide2 = () => {
  return (
    <div className='relative w-full h-full bg-[url("/images/slide2.jpeg")] bg-cover bg-center'>
      <section className="h-full flex flex-col justify-end pb-12 items-start px-6 md:px-14 bg-black/30 z-10  bg-cover bg-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Vidyda Seva
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
          At <span className="text-yellow-300">Sai margam</span>, We nurture
          young minds through education, values, and opportunities — empowering
          every child to shine with knowledge and character.
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

export default Slide2;
