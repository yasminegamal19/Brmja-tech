import { memo } from "react";
import "./WhyBrmja.modules.css";
import MainTitle from "../MainTitle/MainTitle";

const statsData = [
  { number: "5+", label: "Years Experience" },
  { number: "150+", label: "Completed Projects" },
  { number: "50+", label: "Happy Clients" },
  { number: "High Quality", label: "Continuous Support" },
];

const WhyBrmja = ({title, desc}) => {
  return (
    <section className="why-brmja py-5">
      <div className="container">
        <MainTitle
          title="Why Brmja "
          desc="We excel in everything you need for your digital project success"
        />
        <div className="row">
          <div className="why-left col-xl-6 col-12">
            <ul className="why-list">
              <li>
                <span className="why-icon"></span>
                Latest Technologies
              </li>
              <li>
                <span className="why-icon"></span>
                High Quality & Continuous Support
              </li>
              <li>
                <span className="why-icon"></span>
                Fast Delivery
              </li>
              <li>
                <span className="why-icon"></span>
                Advanced Security
              </li>
              <li>
                <span className="why-icon"></span>
                Responsive Design
              </li>
            </ul>
          </div>
          <div className="why-right col-xl-6 col-12">
            <video
              className="video"
              src="/hero-background-02.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>

            <div className="video-overlay"></div>

            <div className="cards">
              {statsData.map((stat, index) => (
                <div className="card" key={index}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyBrmja);
