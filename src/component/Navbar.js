import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = React.useState(1);

  function handleToggle(e) {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <div className="">
      <AnimatePresence>
        {!toggle && (
          <motion.div
            initial={{
              opacity: 0,
              y: -1200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            exit={{
              y: -1200,
              opacity: 0,
            }}
            className="absolute z-20  min-w-full top-0 left-0 bg-gradient-to-br from-gray-200 to-blue-200 h-screen"
          >
            <div className="text-center space-y-5 bg-transparent lg:space-y-0 flex justify-end    px-8 py-5">
              <div
                className="space-x-4 cursor-pointer items-end font-bold text-3xl"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x transition  duration-200"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            <div className=" font-bold text-5xl  py-7 flex justify-center items-center flex-col space-y-9">
              <motion.div
                whileHover={{
                  opacity: 0.7,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="cursor-pointer   text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text   "
              >
                Home
              </motion.div>
              <div className=" text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text   ">
                About
              </div>
              <div className=" text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text   ">
                Service
              </div>
              <div className=" text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text   ">
                Portfolio
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {true && (
        <div className="text-center  space-y-5 bg-transparent  flex items-center justify-end bg-gradient-to-tr from-gray-100 to-blue-200   px-8 py-5">
          {/* <div className="px-3 text-lg text-white bg-blue-600 rounded-3xl py-2 font-bold  mx-5">
              <button>Request a Quote</button>
            </div> */}
          <div
            className="space-x-4 cursor-pointer items-end font-bold text-3xl"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={4} y1={6} x2={20} y2={6} />
                <line x1={4} y1={12} x2={20} y2={12} />
                <line x1={4} y1={18} x2={20} y2={18} />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x transition  duration-200"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
