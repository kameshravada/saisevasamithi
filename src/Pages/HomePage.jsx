import React from "react";
import Header from "../Components/Header";
import Hero2 from "../Components/Hero2";
import PreviousActivityCards from "../Components/PreviousActivityCards";
import { motion } from "framer-motion";
import AboutBaba from "./AboutBaba";
import MissionValues from "../Components/MissionValues";
import FeaturedVideo from "../Components/FeaturedVideo";
import GallerySection from "../Components/GallerySection";
import Testimonials from "../Components/Testimonials";
import GetInvolved from "../Components/GetInvolved";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero2 />
      <AboutBaba/>
      <MissionValues/>
      <FeaturedVideo/>

      <motion.section
        className="bg-white py-16 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Together, We Create Meaningful Impact
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          At <span className="text-yellow-500 font-semibold">Sai margam</span>,
          every act of service is a step toward transforming lives. From health
          camps and education support to rural development and spiritual
          upliftment, our initiatives are driven by love, compassion, and a deep
          commitment to selfless service.
          <br />
          <br />
          With the heartfelt efforts of our team and well-wishers, we’ve touched
          thousands of lives — nurturing children, empowering families, and
          uplifting entire communities across villages.
        </p>
        <p className="mt-6 text-md italic text-gray-500">
          “Service to man is service to God.” — Bhagawan Sri Sathya Sai Baba
        </p>
      </motion.section>
      <PreviousActivityCards />
      <GallerySection/>
      <Testimonials/>
      <GetInvolved/>
      <Footer/>
    </div>
  );
};

export default HomePage;
