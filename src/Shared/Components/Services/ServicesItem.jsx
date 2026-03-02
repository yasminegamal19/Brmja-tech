import React from "react";
import "./Services.modules.css";
import {
  FaMobileAlt,
  FaGlobe,
  FaCogs,
  FaPalette,
  FaShoppingCart,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const servicesData = [
  {
    id: 1,
    title: "Mobile App",
    description:
      "Design and develop sleek, responsive mobile applications for iOS and Android.",
    icon: <FaMobileAlt />,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Create fast, scalable, and secure websites with modern technologies.",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    title: "ERP Systems",
    description:
      "Build custom ERP solutions to manage your business processes efficiently.",
    icon: <FaCogs />,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Craft intuitive user experiences with modern, user-centered design.",
    icon: <FaPalette />,
  },

];

const ServicesItem = () => {
  return (
    <section className="service">
      <div className="services-wrapper">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="service-card"
            style={{
              marginTop: `${index * 40}px`, 
              animationDelay: `${index * 0.1}s`, 
            }}
          >
            <div className="service-data">
              <div className="icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesItem;

//  ******************* swiper  *******************

// import React from "react";
// import "./Services.modules.css";
// import { FaMobileAlt, FaGlobe, FaCogs, FaPalette, FaShoppingCart } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// const servicesData = [
//   {
//     id: 1,
//     title: "Mobile App",
//     description:
//       "Design and develop sleek, responsive mobile applications for iOS and Android.",
//     icon: <FaMobileAlt />,
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     description:
//       "Create fast, scalable, and secure websites with modern technologies.",
//     icon: <FaGlobe />,
//   },
//   {
//     id: 3,
//     title: "ERP Systems",
//     description:
//       "Build custom ERP solutions to manage your business processes efficiently.",
//     icon: <FaCogs />,
//   },
//   {
//     id: 4,
//     title: "UI/UX Design",
//     description:
//       "Craft intuitive user experiences with modern, user-centered design.",
//     icon: <FaPalette />,
//   },
//   {
//     id: 5,
//     title: "E-Commerce Solutions",
//     description:
//       "Build powerful online stores with payment, shipping, and analytics integration.",
//     icon: <FaShoppingCart />,
//   },
// ];
// const ServicesItem = () => {
//   return (
//     <>
//       <Swiper
//         spaceBetween={25}
//         slidesPerView={4} 
//         grabCursor={true}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//           1200: { slidesPerView: 4 }, 
//         }}
//       >
//         <section className="service">
//           {servicesData.map((service, index) => (
//             <SwiperSlide
//               className="col-xl-4 col-12 service-card"
//               key={service?.id}
//               style={{
//                 transform: `translateY(${index * 40}px)`,
//                 animation: "fadeUp 0.6s ease forwards",
//                 animationDelay: `${(index % 4) * 35}s`,
//               }}
//             >
//               <div className="service-data">
//                 <div className="icon">{service.icon}</div>
//                 <h3 className="service-title">{service.title}</h3>
//                 <p className="service-desc">{service.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </section>
//       </Swiper>
//     </>
//   );
// };

// export default ServicesItem;
