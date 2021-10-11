import React from "react";
import { gridAnimation, cardAnimation, h3Animation } from "./Animations";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Data from "../../Data/DataImg";
const Carts = () => {
  return (
    <>
      <div className="carsContainer">
        <motion.h3 variants={h3Animation} animate="show" exit="hide">
          Hãy chọn xe ô tô mà bạn muốn 😊
        </motion.h3>
      </div>
    </>
  );
};

export default Carts;
