import React from "react";
import Header from "../../Component/ConvertPage/Header";
import Hero from "../../Component/ConvertPage/hero/Hero";
import Image from "../../Component/ConvertPage/images/img-2.jpg";
import { motion } from "framer-motion";
import { animationTwo } from "../../Component/ConvertPage/Animations/Animation";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Hero image={Image} title="Beautiful views" desc="Never seen before" />
      About
    </motion.div>
  );
};

export default About;
