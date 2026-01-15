import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import servicesCatalog from "../content/servicesCatalog";
import villages from "../content/villages";
import { motion } from "framer-motion";
import WhatWeDoCards from "../Components/WhatWeDoCards";

const SevaCategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryKey = category || "annadaatha";
  const categoryData = servicesCatalog[categoryKey];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Category not found
      </div>
    );
  }

  const { villageServiceKey, isSpecialProgram } = categoryData;

  const villagesWithSeva = villages.filter(
    (v) => v.services?.[villageServiceKey]?.active
  );

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-6 md:px-20">
      <div className="flex justify-start mb-8">
        <Link
          to={-1}
          className="text-white text-sm bg-blue-500/75 px-2 py-1 rounded"
        >
          ← Back
        </Link>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          {isSpecialProgram && (
            <div className="p-2 max-w-7xl flex justify-center mx-auto mb-4">
              <motion.img src={`${categoryData.icon}`} alt="" className="h-50"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* <img src={`${categoryData.icon}`} alt="" className="h-50" /> */}
              </motion.img>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {categoryData.title}
          </h1>

          {categoryData.heroQuote && (
            <p className="italic text-gray-600 mb-4">
              “{categoryData.heroQuote}”
            </p>
          )}

          <p className="max-w-3xl mx-auto text-gray-700">
            {categoryData.intro}
          </p>
        </motion.div>

        {/* WHAT WE DO */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What We Do</h2>

          <ul className="grid sm:grid-cols-2 gap-4">
            {categoryData.services.map((service, i) => (
              <li
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-gray-200"
              >
                {service}
              </li>
            ))}
          </ul>
        </div> */}
        {/* WHAT WE DO */}
        <div className="mb-16">
          {!isSpecialProgram && (
            <h2 className="text-2xl font-semibold mb-6">What We Do</h2>
          )}

          <WhatWeDoCards services={categoryData.services} />
        </div>

        {/* VILLAGES */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Villages Where This Seva Is Active
          </h2>

          {villagesWithSeva.length === 0 ? (
            <p className="text-gray-600 max-w-xl">
              This seva has not yet begun in villages, but it is part of our
              vision and will be initiated wherever the need arises.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {villagesWithSeva.map((village) => (
                <motion.div
                  key={village.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/villages/${village.id}`)}
                >
                  {/* IMAGE */}
                  {village.photos?.[0] && (
                    <div hookup className="h-40 overflow-hidden">
                      <img
                        src={village.photos[0]}
                        alt={village.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-1">
                      {village.name}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {village.description}
                    </p>

                    <div className="mt-3 text-sm text-blue-600">
                      View village →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SevaCategoryPage;
