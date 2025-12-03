import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PreviousActivityCards = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/data/activities.json")
      .then((r) => r.json())
      .then((d) => setActivities(d.activities || []))
      .catch(() =>
        setActivities([
          { id: "regular-services", title: "Regular Services", description: "Daily tuitions & Bala Vikas, meals for elderly" },
          { id: "other-services", title: "Other Services", description: "Temple & school development, sanitation, medical assistance" }
        ])
      );
  }, []);

  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Activities</h2>
        <p className="text-center text-gray-600 mb-8">Select any card to view year-wise details and villages.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Highlight cards for quick navigation */}
          <motion.article whileHover={{ y: -6 }} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => navigate('/villages')} aria-label="Villages adopted">
            <h3 className="text-xl font-semibold mb-2">Villages Adopted</h3>
            <p className="text-gray-600 mb-4">View all villages we have adopted and their yearly activities.</p>
            <div className="text-sm text-gray-500">Click to view villages →</div>
          </motion.article>

          <motion.article whileHover={{ y: -6 }} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => navigate('/activities/regular-services')} aria-label="Regular services">
            <h3 className="text-xl font-semibold mb-2">Regular Services</h3>
            <p className="text-gray-600 mb-4">Daily tuitions, Bala Vikas, and afternoon meals to elderly & handicapped.</p>
            <div className="text-sm text-gray-500">Click to view details →</div>
          </motion.article>

          <motion.article whileHover={{ y: -6 }} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => navigate('/activities/other-services')} aria-label="Other services">
            <h3 className="text-xl font-semibold mb-2">Other Services</h3>
            <p className="text-gray-600 mb-4">Temple & school development, village sanitation, cultural activities, medical camps.</p>
            <div className="text-sm text-gray-500">Click to view details →</div>
          </motion.article>

          {/* List other activities loaded from JSON */}
          {activities.map((a) => (
            <article key={a.id} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(`/activities/${a.id}`)} aria-labelledby={`title-${a.id}`}>
              <h3 id={`title-${a.id}`} className="text-xl font-semibold mb-2">{a.title}</h3>
              <p className="text-gray-600 mb-4">{a.description}</p>
              <div className="text-sm text-gray-500">Click to view year-wise details →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousActivityCards;
