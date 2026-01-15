import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/images/gallery/IMG-20170708-WA0012.jpg",
  "/images/gallery/IMG-20170708-WA0022.jpg",
  "/images/gallery/IMG-20170708-WA0025.jpg",
  "/images/gallery/IMG-20170708-WA0028.jpg",
  "/images/gallery/IMG-20170708-WA0031.jpg",
  "/images/gallery/IMG-20170924-WA0006.jpg",
];

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <div className="text-white text-sm bg-blue-500/65 px-2 py-1 rounded">
            <Link to={-1} className="text-sm">
              ← Back
            </Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIndex(i)}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 object-cover cursor-pointer"
              />
            </button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative max-w-6xl w-full flex flex-col items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-2 right-6 z-50 text-white text-2xl bg-black/50 rounded-full px-3 py-1.5 hover:bg-black cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Download Button */}
              <a
                href={images[lightboxIndex]}
                download
                className="absolute top-2 right-20 z-50 text-white text-[15px] bg-black/50 rounded-full px-3.75 py-1.75 hover:bg-black cursor-pointer"
                aria-label="Download"
              >
                &#8595;
              </a>

              {/* Image */}
              <img
                src={images[lightboxIndex]}
                alt={`Full ${lightboxIndex + 1}`}
                className="max-h-[80vh] max-w-full object-contain rounded-md"
              />

              {/* Navigation */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + images.length) % images.length
                    )
                  }
                  className="text-white text-3xl bg-black/40 px-3 py-1 rounded hover:bg-black"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % images.length)
                  }
                  className="text-white text-3xl bg-black/40 px-3 py-1 rounded hover:bg-black"
                >
                  ›
                </button>
              </div>

              <div className="mt-3 flex justify-between text-white w-full z-50 [&>button]:cursor-pointer [&>button]:bg-black/40 [&>button]:px-3 [&>button]:py-1 [&>button]:rounded [&>button:hover]:bg-black">
                <button
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + images.length) % images.length
                    )
                  }
                >
                  ‹ Prev
                </button>
                <button
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % images.length)
                  }
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
