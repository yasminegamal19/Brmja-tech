import { memo } from "react";
import './Portfolio.modules.css';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full online store with payment integration and dashboard.",
    image: "e-commerce.jfif",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "ERP System",
    description: "Custom ERP system for managing company operations.",
    image: "erp.jfif",
    tech: ["React", "Laravel", "MySQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Web Development",
    description: "Responsive company profile website with modern UI.",
    image: "mobile.jpeg",
    tech: ["React", "Bootstrap"],
    link: "#",
  },
  {
    id: 4,
    title: "Booking System",
    description: "Online booking platform with real-time availability.",
    image: "Ui Travel Design.jfif",
    tech: ["Next.js", "Firebase"],
    link: "#",
  },
  {
    id: 5,
    title: "Mobile App UI",
    description: "Cross-platform mobile app with smooth UX.",
    image: "erp.jfif",
    tech: ["React Native"],
    link: "#",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Interactive dashboard with charts and live statistics.",
    image: "e-commerce.jfif",
    tech: ["React", "Chart.js"],
    link: "#",
  },
];

const PortfolioItem = () => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="col-xl-4 col-md-6 col-12 mb-4">
          <div className="portfolio-card">
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <a href={project.link}>View Project →</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(PortfolioItem);
