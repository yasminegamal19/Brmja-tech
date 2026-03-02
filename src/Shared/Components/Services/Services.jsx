import { memo } from "react";
import MainTitle from "../MainTitle/MainTitle";
import ServicesItem from "./ServicesItem";

const Services = ({ title }) => {
  return (
    <div className="services py-5" id="services">
      <div className="container">
        <MainTitle
          title={"Our Services"}
          desc={
            "We specialize in creating custom applications, websites, and systems that fit your business needs. Every project is built with unique architectural code, ensuring your software is secure, scalable, and fully optimized for performance."
          }
        />
        <div className="row">
            <ServicesItem />
      </div>
      </div>
    </div>
  );
};

export default memo(Services);
