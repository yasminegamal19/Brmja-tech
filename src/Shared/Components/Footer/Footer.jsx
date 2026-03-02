import react from "react";
import "./Footer.modules.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

   const handleFooterClick = (e, id) => {
     e.preventDefault();

     if (location.pathname !== "/") {
       navigate("/");

       setTimeout(() => {
         const element = document.getElementById(id);
         if (element) element.scrollIntoView({ behavior: "smooth" });
       }, 200);
     } else {
       const element = document.getElementById(id);
       if (element) element.scrollIntoView({ behavior: "smooth" });
     }
   };
  return (
    <>
      <div className="footer py-5">
        <div className="container">
          <div className="content p-5">
            <div className="row">
              <div className="col-xl-3 col-12 text-white-50">
                <div className="img">
                  <img src="/logo.svg" alt="" />
                </div>
                <p className="my-4">
                  We craft reliable websites, mobile apps, and custom software
                  with clean code, strong security, and scalable
                  architecture—delivered on time.
                </p>
                <div className="links d-flex justify-content-center pb-3 gap-3">
                  <a href="#">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-tiktok"></i>
                  </a>
                  <a href="#"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-12 text-white-50">
                <h5 className="text-uppercase pb-3">Quick Links</h5>
                <a href="/" onClick={(e) => handleFooterClick(e, "home")}>
                  Home
                </a>
                <hr />
                <a
                  href="#services"
                  onClick={(e) => handleFooterClick(e, "services")}
                >
                  Services
                </a>
                <hr />
                <a
                  href="#portfolio"
                  onClick={(e) => handleFooterClick(e, "portfolio")}
                >
                  Portfolio
                </a>
                <hr />
                <a href="#about" onClick={(e) => handleFooterClick(e, "about")}>
                  About Us
                </a>
                <hr />
                <a
                  href="#contact"
                  onClick={(e) => handleFooterClick(e, "contact")}
                >
                  Contact Us
                </a>
                <hr />
              </div>
              <div className="col-xl-3 col-12 text-white-50">
                <h5 className="text-uppercase pb-3">Our Services</h5>
                <Link to="/request-service">Request Service</Link>
                <hr />
                <Link to="/privacy">Privacy Policy</Link>
                <hr />
                <Link to="/terms">Terms Of Service</Link>
                <hr />
              </div>
              <div className="col-xl-3 col-12 text-white">
                <div>
                  <h5 className="text-uppercase">Location</h5>
                  <div className="location d-flex mb-5 justify-content-center">
                    <i class="bi bi-geo-alt"></i>
                    <div className="text-start">
                      <h6 className="mb-0">Location :</h6>
                      <span>Fisal , Giza, Egypt</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-uppercase">Call center</h5>
                  <div className="call-center d-flex  justify-content-center">
                    <i class="bi bi-telephone-fill"></i>
                    <div className="text-start">
                      <h6 className="mb-0">call us :</h6>
                      <span>+201010595705</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
