import React from "react";
import {motion} from "framer-motion";

const GetInvolved = () => (
  <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Get Involved
    </motion.h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      Join us in our journey of service and devotion. Participate in seva,
      volunteer your time, or contribute in ways close to your heart.
    </p>
    <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition">
      Join Now
    </button>
  </section>
);

export default GetInvolved;