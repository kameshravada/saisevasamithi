import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import villages from "../content/villages";
import { motion } from "framer-motion";

const VillageDetailsPage = () => {
  const { slug } = useParams();

  const village = villages.find((v) => v.slug === slug);

  const [lightbox, setLightbox] = useState({
    open: false,
    photos: [],
    index: 0,
  });

  const [expandedServices, setExpandedServices] = useState({});

  if (!village) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p>Village not found</p>
        <Link to="/villages" className="text-blue-600 underline mt-2">
          Back to villages
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex justify-end">
            <Link
              to={-1}
              className="text-white text-sm bg-blue-500/65 px-2 py-1 rounded"
            >
              ← Back
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mt-4">
            {village.name}
          </h1>

          <p className="text-gray-600 mt-2">{village.description}</p>
        </motion.div>

        {/* HERO IMAGE */}
        {village.photos?.[0] && (
          <div className="h-72 rounded-xl overflow-hidden mb-12">
            <img
              src={village.photos[0]}
              alt={village.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* SERVICES */}
        <div className="space-y-12">
          {Object.entries(village.services).map(([key, service]) => {
            if (!service?.active) return null;

            return (
              <div key={key}>
                <h2 className="text-2xl font-semibold mb-4 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </h2>

                {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
                <div className="grid gap-6">
                  {service.items?.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                      <h3 className="font-semibold mb-2">{item.title}</h3>

                      <p className="text-sm text-gray-600 mb-3">
                        {item.description}
                      </p>

                      {/* SERVICE PHOTOS */}
                      {item.photos &&
                        item.photos.length > 0 &&
                        (() => {
                          const previewCount = 4;
                          const isExpanded = expandedServices[item.title];
                          const remaining = item.photos.length - previewCount;

                          return (
                            <div className="mt-3 space-y-2">
                              {!isExpanded ? (
                                /* PREVIEW ROW */
                                <div className="grid md:grid-cols-6 grid-cols-4 gap-2">
                                  {item.photos
                                    .slice(0, previewCount)
                                    .map((photo, idx) => {
                                      const isLast =
                                        idx === previewCount - 1 &&
                                        remaining > 0;

                                      return (
                                        <button
                                          key={idx}
                                          type="button"
                                          onClick={() => {
                                            if (isLast) {
                                              setExpandedServices((prev) => ({
                                                ...prev,
                                                [item.title]: true,
                                              }));
                                            } else {
                                              setLightbox({
                                                open: true,
                                                photos: item.photos,
                                                index: idx,
                                              });
                                            }
                                          }}
                                          className="relative  md:aspect-[1/1] aspect-square rounded-md overflow-hidden"
                                        >
                                          <img
                                            src={photo}
                                            alt=""
                                            className="w-full h-full object-cover cursor-pointer"
                                          />

                                          {isLast && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold cursor-pointer">
                                              +{remaining} more
                                            </div>
                                          )}
                                        </button>
                                      );
                                    })}
                                </div>
                              ) : (
                                /* EXPANDED GRID */
                                <div className="space-y-3">
                                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                    {item.photos.map((photo, i) => (
                                      <button
                                        key={i}
                                        onClick={() =>
                                          setLightbox({
                                            open: true,
                                            photos: item.photos,
                                            index: i,
                                          })
                                        }
                                        className="h-28 rounded-md overflow-hidden"
                                      >
                                        <img
                                          src={photo}
                                          alt=""
                                          className="w-full h-full object-cover cursor-pointer"
                                        />
                                      </button>
                                    ))}
                                  </div>

                                  {/* SHOW LESS */}
                                  <div className="flex justify-end">
                                    <button
                                      onClick={() =>
                                        setExpandedServices((prev) => ({
                                          ...prev,
                                          [item.title]: false,
                                        }))
                                      }
                                      className="text-sm text-blue-600 self-start cursor-pointer"
                                    >
                                      Show less
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                    </div>
                  ))}

                  {key === "dailyMeals" && (
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <h3 className="font-semibold mb-2">
                        {service.programmeName}
                      </h3>

                      <p className="text-sm text-gray-600 mb-2">
                        {service.description}
                      </p>

                      <p className="text-sm mt-1">
                        Beneficiaries: ~{service.beneficiariesApprox}
                      </p>

                      <p className="text-sm mb-3">
                        Cost per day: ₹{service.costPerDay}
                      </p>

                      {/* DAILY MEALS PHOTOS */}
                      {/* {service.photos && service.photos.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {service.photos.slice(0, 4).map((photo, idx) => (
                            <div
                              key={idx}
                              className="h-24 rounded-md overflow-hidden"
                            >
                              <img
                                src={photo}
                                alt={`Annadaatha Sukhibhava ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      )} */}

                      {service.photos &&
                        service.photos.length > 0 &&
                        (() => {
                          const previewCount = 4;
                          const isExpanded = expandedServices[service.title];
                          const remaining =
                            service.photos.length - previewCount;

                          return (
                            <div className="">
                              <div className="mt-3 space-y-2">
                                {!isExpanded ? (
                                  /* PREVIEW ROW */
                                  <div className="grid md:grid-cols-6 grid-cols-4 gap-2">
                                    {service.photos
                                      .slice(0, previewCount)
                                      .map((photo, idx) => {
                                        const isLast =
                                          idx === previewCount - 1 &&
                                          remaining > 0;

                                        return (
                                          <button
                                            key={idx}
                                            type="button"
                                            onClick={() => {
                                              if (isLast) {
                                                setExpandedServices((prev) => ({
                                                  ...prev,
                                                  [service.title]: true,
                                                }));
                                              } else {
                                                setLightbox({
                                                  open: true,
                                                  photos: service.photos,
                                                  index: idx,
                                                });
                                              }
                                            }}
                                            className="relative md:aspect-[1/1] aspect-square rounded-md overflow-hidden"
                                          >
                                            <img
                                              src={photo}
                                              alt=""
                                              className="w-full h-full object-cover cursor-pointer"
                                            />

                                            {isLast && (
                                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold cursor-pointer">
                                                +{remaining} more
                                              </div>
                                            )}
                                          </button>
                                        );
                                      })}
                                  </div>
                                ) : (
                                  /* EXPANDED GRID */
                                  <div className="space-y-3">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                      {service.photos.map((photo, i) => (
                                        <button
                                          key={i}
                                          onClick={() =>
                                            setLightbox({
                                              open: true,
                                              photos: service.photos,
                                              index: i,
                                            })
                                          }
                                          className="h-28 rounded-md overflow-hidden"
                                        >
                                          <img
                                            src={photo}
                                            alt=""
                                            className="w-full h-full object-cover cursor-pointer"
                                          />
                                        </button>
                                      ))}
                                    </div>

                                    {/* SHOW LESS */}
                                    <div className="flex justify-end">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setExpandedServices((prev) => ({
                                            ...prev,
                                            [service.title]: false,
                                          }))
                                        }
                                        className="text-sm text-blue-600 cursor-pointer"
                                      >
                                        Show less
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })()}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* YEARLY HIGHLIGHTS */}
        {village.yearlyHighlights?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
              Year-wise Highlights
            </h2>

            <div className="space-y-6">
              {village.yearlyHighlights.map((yearBlock) => (
                <div key={yearBlock.year}>
                  <h3 className="font-semibold text-lg mb-2">
                    {yearBlock.year}
                  </h3>

                  <div className="">
                    {yearBlock.events.map((event) => (
                      <div
                        key={event.id}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <h4 className="font-semibold">{event.title}</h4>

                        <p className="text-sm text-gray-600 mb-3">
                          {event.description}
                        </p>

                        {/* EVENT PHOTOS */}

                        {event.photos &&
                          event.photos.length > 0 &&
                          (() => {
                            const previewCount = 4;
                            const isExpanded = expandedServices[event.title];
                            const remaining =
                              event.photos.length - previewCount;

                            return (
                              <div className="mt-3 space-y-2">
                                {!isExpanded ? (
                                  /* PREVIEW ROW */
                                  <div className="grid md:grid-cols-6 grid-cols-4 gap-2">
                                    {event.photos
                                      .slice(0, previewCount)
                                      .map((photo, idx) => {
                                        const isLast =
                                          idx === previewCount - 1 &&
                                          remaining > 0;

                                        return (
                                          <button
                                            key={idx}
                                            type="button"
                                            onClick={() => {
                                              if (isLast) {
                                                setExpandedServices((prev) => ({
                                                  ...prev,
                                                  [event.title]: true,
                                                }));
                                              } else {
                                                setLightbox({
                                                  open: true,
                                                  photos: event.photos,
                                                  index: idx,
                                                });
                                              }
                                            }}
                                            className="relative md:aspect-[1/1] aspect-square rounded-md overflow-hidden"
                                          >
                                            <img
                                              src={photo}
                                              alt=""
                                              className="w-full h-full object-cover cursor-pointer"
                                            />

                                            {isLast && (
                                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold cursor-pointer">
                                                +{remaining} more
                                              </div>
                                            )}
                                          </button>
                                        );
                                      })}
                                  </div>
                                ) : (
                                  /* EXPANDED GRID */
                                  <div className="space-y-3">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                      {event.photos.map((photo, i) => (
                                        <button
                                          key={i}
                                          onClick={() =>
                                            setLightbox({
                                              open: true,
                                              photos: event.photos,
                                              index: i,
                                            })
                                          }
                                          className="h-28 rounded-md overflow-hidden"
                                        >
                                          <img
                                            src={photo}
                                            alt=""
                                            className="w-full h-full object-cover cursor-pointer"
                                          />
                                        </button>
                                      ))}
                                    </div>
                                    {/* SHOW LESS */}
                                    <div className="flex justify-end">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setExpandedServices((prev) => ({
                                            ...prev,
                                            [event.title]: false,
                                          }))
                                        }
                                        className="text-sm text-blue-600 cursor-pointer"
                                      >
                                        Show less
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox({ open: false, photos: [], index: 0 })}
        >
          <div
            className="relative max-w-6xl w-full flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox({ open: false, photos: [], index: 0 });
              }}
              className="absolute top-4 right-6 z-50 text-white text-2xl bg-black/50 px-3 py-1 rounded-full cursor-pointer hover:bg-black"
            >
              ✕
            </button>

            {/* DOWNLOAD BUTTON */}
            <a
              href={lightbox.photos[lightbox.index]}
              download
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-20 z-50 text-white bg-black/50 px-3 py-1 rounded-full cursor-pointer hover:bg-black"
            >
              ⬇
            </a>

            {/* IMAGE */}
            <img
              src={lightbox.photos[lightbox.index]}
              alt=""
              className="max-h-[80vh] max-w-full object-contain rounded-lg cursor-pointer"
            />

            {/* SIDE ARROWS */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({
                    ...prev,
                    index:
                      (prev.index - 1 + prev.photos.length) %
                      prev.photos.length,
                  }));
                }}
                className="pointer-events-auto cursor-pointer text-white text-3xl bg-black/40 px-3 py-1 rounded hover:bg-black"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({
                    ...prev,
                    index: (prev.index + 1) % prev.photos.length,
                  }));
                }}
                className="pointer-events-auto cursor-pointer text-white text-3xl bg-black/40 px-3 py-1 rounded hover:bg-black"
              >
                ›
              </button>
            </div>

            {/* BOTTOM NAV */}
            <div className="mt-4 w-full flex justify-between text-white">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({
                    ...prev,
                    index:
                      (prev.index - 1 + prev.photos.length) %
                      prev.photos.length,
                  }));
                }}
                className="cursor-pointer bg-black/40 px-4 py-1 rounded hover:bg-black"
              >
                ‹ Prev
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((prev) => ({
                    ...prev,
                    index: (prev.index + 1) % prev.photos.length,
                  }));
                }}
                className="cursor-pointer bg-black/40 px-4 py-1 rounded hover:bg-black"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VillageDetailsPage;
