import React from "react";
import { motion } from "framer-motion";
const Index = () => {
  return (
    <div>
      <h1>
        <motion.div
          animate={{
            x: 33,
            y: -59,
            scale: 1,
            rotate: 0,
          }}
        >
          <h1>aa</h1>
        </motion.div>
      </h1>
    </div>
  );
};

export default Index;