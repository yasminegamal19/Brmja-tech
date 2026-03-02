import React, { useEffect, useRef } from "react";
import "particles.js";

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 130, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return <div id="particles-js" ref={particlesRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "550px", zIndex: -1 ,backgroundColor: "#0d47a1",}} />;
};

export default ParticlesBackground;