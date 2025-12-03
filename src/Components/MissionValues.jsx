import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, HandHeart, Globe } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Love All",
    desc: "Love is the foundation of all service at Sai Margam.",
  },
  {
    icon: <HandHeart className="w-10 h-10 text-yellow-500" />,
    title: "Selfless Seva",
    desc: "Service without expectation uplifts both giver and receiver.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    title: "Education",
    desc: "Nurturing children with values and knowledge.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "Unity",
    desc: "Oneness of all faiths and communities.",
  },
  {
    icon: <Globe className="w-10 h-10 text-purple-500" />,
    title: "Peace & Truth",
    desc: "Living in harmony with spiritual principles.",
  },
];

const MissionValues = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50/20 to-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Mission & Core Values
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {values.map((val, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
            <p className="text-gray-600">{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionValues;
