import React from "react";
import { Route } from "react-router";
import Navbar from "./component/Navbar";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ServiceScreen from "./screens/ServiceScreen";

function App() {
  return (
    <div className="min-h-screen   bg-white-100 ">
      <Navbar />
      <div className="container mx-auto">
        <Route path="/service" component={ServiceScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </div>
    </div>
  );
}

export default App;
