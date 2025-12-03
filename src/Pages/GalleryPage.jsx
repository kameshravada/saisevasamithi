import React, { useState } from "react";
import { Link } from "react-router-dom";

// const images = [
//   "/assets/images/gallery1.jpg",
//   "/assets/images/gallery2.jpg",
//   "/assets/images/gallery3.jpg",
//   "/assets/images/gallery4.jpg",
//   "/assets/images/gallery5.jpg",
//   "/assets/images/gallery6.jpg",
//   "/assets/images/gallery7.jpg",
//   "/assets/images/gallery8.jpg",
// ];

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
          <Link to="/" className="text-sm text-blue-600 underline">
            Back to home
          </Link>
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
                className="w-full h-48 object-cover"
              />
            </button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="max-w-5xl w-full">
              <button
                onClick={() => setLightboxIndex(null)}
                className="text-white mb-3 text-xl float-right"
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={images[lightboxIndex]}
                alt={`Full ${lightboxIndex + 1}`}
                className="w-full h-auto rounded-md"
              />
              <div className="mt-3 flex justify-between text-white">
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
