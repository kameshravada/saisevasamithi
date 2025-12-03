import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Example images - adjust paths to your actual images
const images = [
  "/images/gallery/IMG-20170708-WA0012.jpg",
  "/images/gallery/IMG-20170708-WA0022.jpg",
  "/images/gallery/IMG-20170708-WA0025.jpg",
  "/images/gallery/IMG-20170708-WA0028.jpg",
  "/images/gallery/IMG-20170708-WA0031.jpg",
  "/images/gallery/IMG-20170924-WA0006.jpg"
];

// Utility to compute columns based on window width (matches Tailwind-like breakpoints)
function getCols(width) {
  if (width < 640) return 2;       // mobile
  if (width < 768) return 3;       // small tablet
  if (width < 1024) return 4;      // desktop
  return 4;                        // large desktop keep 4
}

const GallerySection = () => {
  const [cols, setCols] = useState(getCols(typeof window !== "undefined" ? window.innerWidth : 1024));

  useEffect(() => {
    function onResize() {
      setCols(getCols(window.innerWidth));
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const rows = 2;
  const showCount = cols * rows;
  const shownImages = images.slice(0, showCount);
  const remaining = images.length - shownImages.length;

  return (
    <section className="py-12 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Gallery</h2>
        <p className="text-center text-gray-600 mb-8">A selection of recent photos.</p>

        <div
          className={`grid gap-3`}
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {shownImages.map((src, idx) => {
            const isLast = idx === shownImages.length - 1 && remaining > 0;
            return (
              <div key={src} className="relative overflow-hidden rounded-lg">
                <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-40 md:h-48 object-cover" />
                {isLast && (
                  <Link
                    to="/gallery"
                    className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold"
                    aria-label={`View ${remaining} more photos`}
                  >
                    +{remaining} photos — Click to view
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {images.length === 0 && <p className="text-center text-gray-500 mt-6">No photos yet.</p>}
      </div>
    </section>
  );
};

export default GallerySection;
