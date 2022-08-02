import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Background from "../component/Background";
import Button from "../component/Button";

export default function HomeScreen() {
  const [isLoading, SetLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      SetLoading(!isLoading);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen space-x-9 p mx-auto bg-gradient-to-br from-gray-100 to-blue-200 w-900 px-24 py-11">
      {isLoading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            exit={{ opacity: 1 }}
            className="flex h-96 justify-center items-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-7xl font-bold  lg:text-6xl text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text   "
            >
              Wellbenix <br />
              <span className=""></span>
            </motion.h1>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="flex flex-col md:flex-row justify-between relative space-x-10 space-y-20 md:space-y-0">
          <div className="lg:w-1/3">
            <motion.div
              initial={{
                opacity: 0,
                x: 400,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <div className="space-y-8 flex flex-col sm:justify-center sm:items-center md:items-start ">
                <h1 className="text-5xl font-bold  lg:text-6xl text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text   ">
                  Wellbenix <br />
                  <span className=""></span>
                </h1>

                <p className="text-gray-500 text-lg font-semibold md:w-3/4 mb-10">
                  Wellbenix is a software development firm dedicated to{" "}
                  <strong className="font-bold text-black">
                    cutting-edge{" "}
                  </strong>
                  IT solutions with a focus on{" "}
                  <strong className="font-bold text-black">
                    {" "}
                    product Qaulity
                  </strong>
                </p>
                <Button />
              </div>
            </motion.div>
          </div>
          <motion.div>
            <Background />
          </motion.div>
        </div>
      )}
    </div>
  );
}
