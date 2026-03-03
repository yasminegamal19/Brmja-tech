import { memo } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Hosting from "../Hosting/Hosting";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import WhyBrmja from "../WhyBrmja/WhyBrmja";

const Layouts = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Home />
          < About />
          <Services />
          <Portfolio />
          <WhyBrmja />
          <Hosting />
          <Contact />
    </>
  );
};

export default memo(Layouts);
