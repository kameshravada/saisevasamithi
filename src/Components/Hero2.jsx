import { Carousel } from "@mantine/carousel";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import { useMediaQuery } from "@mantine/hooks";

const Hero2 = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const isMobile = useMediaQuery("(max-width: 768px)"); // or 640px for smaller devices

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Carousel
        emblaOptions={{ loop: true }}
        withIndicators
        withControls={false}
        plugins={[autoplay.current]}
        height={isMobile ? "68vh" : "88vh"}
        // onMouseEnter={autoplay.current.stop}
        // onMouseLeave={() => autoplay.current.play()}
      >
        <Carousel.Slide>
          <Slide1 />
        </Carousel.Slide>
        <Carousel.Slide>
          <Slide2 />
        </Carousel.Slide>
        <Carousel.Slide>
          <Slide3 />
        </Carousel.Slide>
        <Carousel.Slide>
          <Slide4 />
        </Carousel.Slide>
      </Carousel>
    </motion.div>
  );
};

export default Hero2;
