import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import activities from "../content/homeActivities.json";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

const themeStyles = {
  education: "border-l-4 border-blue-500/30",
  health: "border-l-4 border-red-500/30",
  village: "border-l-4 border-green-600/30",
  skill: "border-l-4 border-purple-500/30",
  meals: "border-l-4 border-amber-500/30",
  villages: "border-l-4 border-teal-500/30",
};

const PreviousActivityCards = () => {
  const navigate = useNavigate();

  return (
    <section id="ourActivities" className="py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Our Activities
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Inspired by Bhagawan Sri Sathya Sai Baba, we serve society through
          education, healthcare, village upliftment, skill development and
          selfless service.
        </p>

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`rounded-xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer bg-white ${
                themeStyles[activity.theme]
              }`}
              onClick={() => navigate(activity.route)}
              aria-label={activity.title}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4">{activity.title}</h3>

                <p className="text-gray-600/80 mb-8 text-center">
                  {activity.shortDescription}
                </p>

                {/* <ul className="text-xs text-gray-700 space-y-1 mb-4">
                {activity.highlights.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul> */}

                <div className="text-sm font-medium text-gray-500">
                  Click to explore →
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousActivityCards;
