import React from "react";
import { motion } from "framer-motion";

const FeaturedVideo = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Divine Inspiration in Action
      </motion.h2>
      <div className="max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/b5P5nq579Yo?si=LYvMeA08sIcJEtTP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default FeaturedVideo;
