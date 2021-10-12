import React from "react";
import { gridAnimation, cardAnimation, h3Animation } from "./Animations";
import { Link, useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";
import Data from "../../Data/DataImg";
const Carts = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const { path, url } = useRouteMatch();
  return (
    <>
      <div className="carsContainer">
        {/* <motion.h3 variants={h3Animation} animate="show" exit="hide"> */}
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="title"
        >
          Hãy chọn xe ô tô mà bạn muốn 😊
        </motion.div>
        {/* </motion.h3> */}
        <motion.div
          className="cars"
          variants={gridAnimation}
          animate="show"
          exit="hide"
        >
          {Data.map((item) => {
            return (
              // <Link to={`/car/${item.id}`} key={item.id}>
              <Link to={`/img/car/${item.id}`} key={item.id}>
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
