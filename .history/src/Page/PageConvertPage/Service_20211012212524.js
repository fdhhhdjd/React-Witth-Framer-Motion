import React from "react";
import Header from "../../Component/ConvertPage/Header";
import Hero from "../../Component/ConvertPage/hero/Hero";
import Image from "../../Component/ConvertPage/images/img-3.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../../Component/ConvertPage/Animations/Animation";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Hero
        image={Image}
        title="Look at this bird"
        desc="Can you believe this?"
      />
      Services
    </motion.div>
  );
};

export default Services;
