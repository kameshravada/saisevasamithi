import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Activities", to: "#ourActivities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contribute", to: "/contribute" },
  { label: "Contact", to: "#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 bg-white">
        <div className="glass-card mx-auto max-w-7xl px-4 sm:px-6 lg:px-14  flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Sai Margam Home"
          >
            <img
              src="/images/saimargam_logo_.png"
              alt="Sai Margam"
              className="h-16 md:h-20 w-auto"
            />
            {/* <div className="hidden sm:block">
              <div className="text-sm font-semibold text-amber-600">
                Sai Margam
              </div>
              <div className="text-xs text-gray-600">
                Love • Service • Unity
              </div>
            </div> */}
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary"
          >
            {links.map((l) => (
              <HashLink
              smooth
                key={l.label}
                to={l.to}
                className="relative group text-gray-700 hover:text-amber-600 transition"
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all" />
              </HashLink>
            ))}
            {/* <Link
              to="/donate"
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              Donate
            </Link> */}
          </nav>

          {/* mobile icon */}
          <div className="md:hidden flex items-center">
            <button
              aria-expanded={open}
              aria-label="Open menu"
              className="p-2"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black z-40"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.28 }}
                className="fixed right-0 top-0 h-full w-3/4 bg-white z-50 p-6"
                aria-label="Mobile menu"
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                <nav className="mt-6 flex flex-col gap-5">
                  {links.map((l) => (
                    <HashLink
                    smooth
                      key={l.label}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-gray-800"
                    >
                      {l.label}
                    </HashLink>
                  ))}
                  {/* <Link
                    to="/donate"
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-block px-5 py-2 bg-amber-500 text-white rounded-lg"
                  >
                    Donate
                  </Link> */}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
