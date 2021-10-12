import React from "react";
import { motion } from "framer-motion";
import "./Icon.css";
import logo from "../../images/logos/logo.png";
const Icons = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <>
      <div className="icon">
        <div className="container">
          <motion.svg xmlns={logo} viewBox="0 0 100 100" className="item">
            <motion.path
              d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default Icons;
