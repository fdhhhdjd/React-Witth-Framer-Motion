import React from "react";
import Header from "../../Component/ConvertPage/Header";
import Hero from "../../Component/ConvertPage/hero/Hero";
import Image from "../../Component/ConvertPage/images/img-1.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero image={Image} title="Experience Nature" desc="Once in a lifetime" />
    </motion.div>
  );
};

export default Home;
