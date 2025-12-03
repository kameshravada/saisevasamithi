import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Devotee 1",
    quote:
      "Serving through Sai Margam has filled my life with peace and divine joy.",
  },
  {
    name: "Devotee 2",
    quote: "A beautiful opportunity to connect with Swami through seva.",
  },
];

const Testimonials = () => (
  <section className="bg-white py-16 px-6 md:px-20">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Voices of Love
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="bg-gray-50 p-6 rounded-xl shadow"
          whileHover={{ scale: 1.02 }}
        >
          <p className="italic text-gray-600 mb-4">“{t.quote}”</p>
          <h4 className="font-semibold text-gray-800">— {t.name}</h4>
        </motion.div>
      ))}
    </div>
  </section>
);
export default Testimonials;