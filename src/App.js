import React from "react";
import { Route } from "react-router";
import Navbar from "./component/Navbar";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ServiceScreen from "./screens/ServiceScreen";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePostion] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    function mousemove(e) {
      setMousePostion({
        x: e.clientX,
        y: e.clientY,
      });
    }
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const varients = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
    },
  };

  return (
    <div className="min-h-screen  ">
      <motion.div
        className="border-2 border-blue-600 z-50 fixed h-6 w-6 px-1 py-1  rounded-full top-0 left-0"
        variants={varients}
        animate="default"
      >
        <motion.div className="border-2 bg-blue-600  h-3 w-3 rounded-full "></motion.div>
      </motion.div>
      <Navbar />
      <div className="min-h-screen  ">
        <Route path="/service" component={ServiceScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/about" component={AboutScreen} />
        {/* <Route path="/" component={HomeScreen} exact /> */}

        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </div>
    </div>
  );
}

export default App;
