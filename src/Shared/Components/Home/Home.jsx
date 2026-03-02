import { memo, useEffect, useState } from "react";
import "./Home.modules.css";
const devicesList = [
  {
    src: "mobile.jpeg",
    type: "mobile",
    animation: "fromBottom",
    shadow: "rgba(45, 25, 12, 0.65)",
  },
  {
    src: "web.jpeg",
    type: "laptop",
    animation: "fromRight",
    shadow: "rgba(128,0,128,0.4)",
  },
  {
    src: "/img2.jfif",
    type: "ui",
    animation: "fromLeft",
    shadow: "rgba(144, 57, 144, 0.3)",
  },
];

const Home = () => {
  return (
    <div>
      <div className="home py-5" id="home">
        <video
          className="home-bg-video"
          autoPlay
          loop
          muted
          playsInline
          src="/background.mp4"
        ></video>

        <div className="py-4 home-wrapper container">
          <div className="home-content pt-5">
            <h1>Brmja Tech</h1>
            <h3>Software, Web & Mobile Development</h3>
            <p>
              We craft reliable websites, mobile apps, and custom software with
              clean code, strong security, and scalable architecture.
            </p>

            <a href="#services">
              <button className="btn">Our Services</button>
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
