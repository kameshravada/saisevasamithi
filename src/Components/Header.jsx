// // import React from "react";

// // const Header = () => {
// //   return (
// //     <div className="flex justify-between  items-center md:px-3 lg:px-14 w-full  max-h-fit shadow ">
// //       <div className="flex items-center justify-center">
// //         <img
// //           src="../src/assets/images/saimargam.org (2).png"
// //           alt="sai margam logo"
// //           className="h-18 w-58 md:h-20 md:w-68 "
// //         />
// //       </div>
// //       <div className="flex items-center justify-center hidden md:block">
// //         <ul className="flex gap-4  lg:gap-8 font-semibold [&>li:hover]:cursor-pointer ">
// //           <li>Home</li>
// //           <li>Sri Satya Sai Baba </li>
// //           <li>Events</li>
// //           {/* <li>Get Involved</li> */}
// //           <li>Gallery</li>
// //           <li>Blog</li>
// //           <li>Contact Us</li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react"; // lightweight icons

// const navLinks = [
//   "Home",
//   "Sri Satya Sai Baba",
//   "Events",
//   "Gallery",
//   "Blog",
//   "Contact Us",
// ];

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center md:px-3 lg:px-14 w-full max-h-fit shadow bg-white sticky top-0 z-50">
//       {/* Logo */}
//       <div className="flex items-center justify-center">
//         <img
//           src="../src/assets/images/saimargam.org (2).png"
//           alt="sai margam logo"
//           className="h-16 w-auto md:h-20 transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Desktop Nav */}
//       <nav className="hidden md:block">
//         <ul className="flex gap-4 lg:gap-8 font-semibold">
//           {navLinks.map((item, i) => (
//             <motion.li
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="relative cursor-pointer group"
//             >
//               {item}
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full" />
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden flex items-center pr-2">
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="focus:outline-none"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Slide-in Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "tween", duration: 0.3 }}
//             className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg z-50 flex flex-col p-6"
//           >
//             <div className="flex justify-end items-center mb-8">
//               {/* <img
//                 src="../src/assets/images/saimargam.org (2).png"
//                 alt="sai margam logo"
//                 className="h-14 w-auto"
//               /> */}
//               <button onClick={() => setMenuOpen(false)} >
//                 <X size={28} />
//               </button>
//             </div>
//             <ul className="flex flex-col gap-6 font-semibold text-lg">
//               {navLinks.map((item, i) => (
//                 <motion.li
//                   key={i}
//                   whileHover={{ scale: 1.05, x: 5 }}
//                   className="cursor-pointer"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "#about" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Get Involved", to: "#get-involved" },
  { label: "Contact", to: "#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 bg-white ">
        <div className="glass-card mx-auto max-w-7xl px-4 sm:px-6 lg:px-14  flex items-center justify-between ">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Sai Margam Home"
          >
            <img
              src="/images/saimargam_logo.png"
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
              <Link
                key={l.label}
                to={l.to}
                className="relative group text-gray-700 hover:text-amber-600 transition"
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all" />
              </Link>
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
                    <Link
                      key={l.label}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-gray-800"
                    >
                      {l.label}
                    </Link>
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
