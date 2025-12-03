import React from "react";
import { motion } from "framer-motion";

const AboutBaba = () => {
  return (
    <section className="bg-gradient-to-b from-red-50/30 to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Bhagawan Sri Sathya Sai Baba
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <span className="italic text-yellow-600 font-semibold">
              “Love All, Serve All. Help Ever, Hurt Never.”
            </span>
            <br />
            <br />
            Bhagawan Sri Sathya Sai Baba’s life and message are a beacon of
            selfless love and service to humanity. His teachings inspire us to
            see divinity in every being and to serve with humility, compassion,
            and unconditional love.
            <br />
            <br />
            At <span className="text-yellow-600 font-semibold">Sai Margam</span>
            , we walk the path laid by Him — blending spiritual upliftment with
            social responsibility, nurturing communities through seva that
            transforms both giver and receiver.
          </motion.p>
        </div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lYpSq1yhc9EE6cC3sB8FoaP_VuLVA-VYjA&s"
            alt="Bhagawan Sri Sathya Sai Baba"
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover border-4 border-yellow-100"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBaba;
