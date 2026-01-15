import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import villages from "../content/villages";

const VillagesList = () => {
  const navigate = useNavigate();

  const adoptedVillages = villages.filter((v) => v.status === "adopted");

  const upcomingVillages = villages.filter((v) => v.status !== "adopted");

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Our Villages</h1>
          <div className="text-white text-sm bg-blue-500/65 px-2 py-1 rounded">
            <Link to={-1} className="text-sm">
              ← Back
            </Link>
          </div>
        </div>

        {/* ADOPTED VILLAGES */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">Adopted Villages</h2>

          {adoptedVillages.length === 0 ? (
            <p className="text-gray-600">
              We are in the process of adopting villages soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {adoptedVillages.map((village) => (
                <motion.article
                  key={village.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/villages/${village.slug}`)}
                >
                  {/* IMAGE */}
                  {village.photos?.[0] && (
                    <div className="h-40 overflow-hidden">
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
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{village.name}</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        Adopted
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {village.description}
                    </p>

                    <div className="mt-3 text-sm text-blue-600">
                      View village →
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>

        {/* UPCOMING VILLAGES (OPTIONAL, FUTURE-READY) */}
        {upcomingVillages.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Villages in Adoption Pipeline
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {upcomingVillages.map((village) => (
                <div
                  key={village.id}
                  className="bg-white rounded-xl shadow-sm p-5 opacity-80"
                >
                  <h3 className="font-semibold text-lg mb-1">{village.name}</h3>
                  <p className="text-sm text-gray-600">
                    Identified for adoption. Focus areas include{" "}
                    {village.needs?.join(", ")}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VillagesList;
