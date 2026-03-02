import { memo } from "react";
import MainTitle from "../MainTitle/MainTitle";
import './About.modules.css';
import { FaLaptopCode, FaRocket, FaHandsHelping, FaBolt } from "react-icons/fa";

const About = ({ title }) => {
  return (
    <div className="about py-5" id="about">
      <div className="container">
        <MainTitle title={"About Us"} />
        <div className="row">
          <div className="content col-xl-6 col-12">
            <h3>Brmja Tech</h3>
            <p>
              We are a technology company specialized in software development
              and websites, providing innovative and advanced solutions to help
              companies grow and evolve in the digital age.
            </p>

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <FaLaptopCode className="accordion-icon" />
                    5+ years of experience in development
                  </button>
                </h3>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our team has over 5 years of experience delivering web and
                    mobile applications for startups and enterprises. We follow
                    modern development standards, ensuring clean code, scalable
                    architecture, and maintainable solutions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <FaRocket className="accordion-icon" />
                    Innovative and advanced solutions
                  </button>
                </h3>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We provide cutting-edge solutions using the latest
                    technologies, including AI, cloud computing, and responsive
                    web design. Our goal is to help businesses stay ahead in the
                    digital world with customized software tailored to their
                    needs.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <FaHandsHelping className="accordion-icon" />
                    Excellent customer service
                  </button>
                </h3>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our dedicated support team is available to assist clients at
                    every step. From project planning to post-launch
                    maintenance, we ensure a smooth and transparent
                    collaboration experience, delivering high satisfaction
                    rates.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <FaBolt className="accordion-icon" />
                    Fast delivery
                  </button>
                </h3>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We value your time. By following agile methodologies and
                    efficient workflows, we deliver projects quickly without
                    compromising quality. Deadlines are met consistently,
                    helping businesses launch products faster.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" img col-xl-6 col-12">
            <img src="/start-now.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
