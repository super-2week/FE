import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);

  const changeBack = (index) => {
    setBack(index);
  };

  const changeIndex = (value) => {
    setIndex(value);
  };

  // const dogdata = [
  //   {id:1, imgUrl: , title:, desc:, price:}
  // ]
  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: !back ? 200 : -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: back ? 200 : -200 }}
          transition={{
            x: { type: "spring", damping: 30, stiffness: 300 },
            opacity: { duration: 0.2 },
          }}
        >
          {/* <CurrentSlide /> */}
          {/* <CurrentSlide data={testData[index]} /> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
