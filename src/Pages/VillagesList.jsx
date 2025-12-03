import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const VillagesList = () => {
  const [villages, setVillages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/data/villages.json")
      .then(r => r.json())
      .then(d => setVillages(d || []))
      .catch(e => console.error(e));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Adopted Villages</h1>
          <Link to="/" className="text-sm text-blue-600 underline">Back to home</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {villages.map(v => (
            <motion.article key={v.id} whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() => navigate(`/villages/${v.id}`)}>
              <div className="h-40 overflow-hidden rounded-md mb-3">
                <img src={v.photos && v.photos[0]} alt={v.villagename} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{v.villagename}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{v.description}</p>
              <div className="mt-3 text-sm text-gray-500">Click to view village details →</div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VillagesList;
