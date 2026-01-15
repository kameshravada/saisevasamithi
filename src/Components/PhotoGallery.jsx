import React, { useState } from "react";

const PhotoGallery = ({ photos = [] }) => {
  const PREVIEW_COUNT = 4;
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!photos.length) return null;

  const previewPhotos = photos.slice(0, PREVIEW_COUNT);
  const remaining = photos.length - PREVIEW_COUNT;

  return (
    <>
      {/* PREVIEW ROW */}
      <div className="grid grid-cols-4 gap-2">
        {previewPhotos.map((src, idx) => {
          const isLast = idx === PREVIEW_COUNT - 1 && remaining > 0;

          return (
            <button
              key={idx}
              onClick={() =>
                isLast ? setExpanded(true) : setLightboxIndex(idx)
              }
              className="relative h-24 rounded-md overflow-hidden"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />

              {isLast && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold text-sm">
                  +{remaining} more
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* EXPANDED GRID */}
      {expanded && (
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="h-28 rounded-md overflow-hidden"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full flex flex-col items-center">
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-6 text-white text-2xl bg-black/50 px-3 py-1 rounded-full"
            >
              ✕
            </button>

            {/* Download */}
            <a
              href={photos[lightboxIndex]}
              download
              className="absolute top-4 right-20 text-white bg-black/50 px-3 py-1 rounded-full"
            >
              ⬇
            </a>

            {/* Image */}
            <img
              src={photos[lightboxIndex]}
              alt=""
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />

            {/* Navigation */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
              <button
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + photos.length) % photos.length
                  )
                }
                className="text-white text-3xl bg-black/40 px-3 py-1 rounded"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % photos.length)
                }
                className="text-white text-3xl bg-black/40 px-3 py-1 rounded"
              >
                ›
              </button>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-3 w-full flex justify-between text-white">
              <button
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + photos.length) % photos.length
                  )
                }
                className="bg-black/40 px-4 py-1 rounded"
              >
                ‹ Prev
              </button>

              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % photos.length)
                }
                className="bg-black/40 px-4 py-1 rounded"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
