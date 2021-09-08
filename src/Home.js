import React from "react";
import Navbar from "./navbar";
import Header from "./Header";

import HowItWorks from "./HowItWorks";
import Aboutus from "./api/Aboutus.js";
import Services from "./Services";
import Contact from "./api/Contact";
import Footer from "./Footer";




const Home = () => {
  return (
    <>
      <Navbar />
      <Header />

      <HowItWorks />
      <Aboutus />

      <Services />
      <Contact />
      <Footer />

    </>
  );
};
export default Home;