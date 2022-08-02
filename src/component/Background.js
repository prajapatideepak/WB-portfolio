import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    // <Tilt
    //   options={{
    //     max: 15,
    //     transition: true,
    //     easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    //   }}
    // >
    <div className="lg:flex-1 py-12 px-0 lg:py-2  lg:px-8">
      <motion.div
        initial={{
          scale: 1.2,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="relative  right-0">
          <div className="absolute w-1/4 right-0 top-0 -translate-y-16 -translate-x-14 ">
            <motion.div
              initial={{
                y: -100,
                x: -200,
                scale: 1.4,
              }}
              animate={{
                y: 0,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 2,
              }}
            >
              <img alt="d" src="images/benix.svg" />
            </motion.div>
          </div>
          <div className="w-1/2 absolute bottom-0 -translate-y-19 -translate-x-20 left-0">
            <motion.div
              initial={{
                y: 100,
                x: 320,
                scale: 2,
              }}
              animate={{
                y: 0,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 2,
              }}
            >
              <img alt="a" src="images/well.svg" />
            </motion.div>
          </div>
          <motion.div
          // initial={{
          //   scale: 0.4,
          // }}
          // animate={{
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 2,
          // }}
          >
            <img alt="g" className="rounded-2xl " src="images/wellbenix.svg" />
          </motion.div>
        </div>
      </motion.div>
    </div>
    // </Tilt>
  );
}
