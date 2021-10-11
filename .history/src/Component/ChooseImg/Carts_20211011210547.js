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
        <motion.div
          className="cars"
          variants={gridAnimation}
          animate="show"
          exit="hide"
        >
          {Data.map((item) => {
            return (
              <Link to={`/img/${item.id}`} key={item.id}>
                <motion.div className="card" variants={cardAnimation}>
                  <img src={`../images/products/${item.image}`} alt="image" />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Carts;
