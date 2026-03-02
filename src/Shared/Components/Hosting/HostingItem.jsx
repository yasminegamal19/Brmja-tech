import { memo } from "react";
import './Hosting.modules.css';
import {
  FaDatabase,
  FaGlobe,
  FaEnvelope,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HostingItem = () => {
  const HostingData = [
    {
      id: 1,
      title: "Basic Package",
      desc: "Perfect for personal websites and small projects.",
      price: "400.00",
      GB: "25 GB Storage Space",
      SD: "Unlimited Subdomains",
      email: "5 Email Accounts",
      money: "30-Day Money Back Guarantee",
      SSL: "Free SSL Certificate for 1 Year",
    },
    {
      id: 2,
      title: "Professional Package",
      desc: "Perfect for startups and successful companies.",
      price: "1000.00",
      GB: "75 GB Storage Space",
      SD: "Unlimited Subdomains",
      email: "15 Email Accounts",
      money: "30-Day Money Back Guarantee",
      SSL: "Unlimited free SSL certificates for all your websites",
    },
    {
      id: 3,
      title: "Advanced Package",
      desc: "Websites with ultra-fast performance.",
      price: "600.00",
      GB: "50 GB Storage Space",
      SD: "Unlimited Subdomains",
      email: "10 Email Accounts",
      money: "30-Day Money Back Guarantee",
      SSL: "Free SSL Certificate for 2 Years",
    },
  ];

  return (
    <div className="row hosting-row">
      {HostingData.map((host) => (
        <div key={host.id} className="col-xl-4 col-md-12 col-12 mb-4">
          <div className="hosting-card">
            <div className="hosting-header">
              <h3>{host.title}</h3>
              <p>{host.desc}</p>
              <div>
                EGP <span className="hosting-price">{host.price}</span> /monthly
              </div>
            </div>
            <ul className="hosting-features">
              <li>
                <FaDatabase className="feature-icon" />
                {host.GB}
              </li>

              <li>
                <FaGlobe className="feature-icon" />
                {host.SD}
              </li>

              <li>
                <FaEnvelope className="feature-icon" />
                {host.email}
              </li>

              <li>
                <FaMoneyBillWave className="feature-icon" />
                {host.money}
              </li>

              <li>
                <FaShieldAlt className="feature-icon" />
                {host.SSL}
              </li>
            </ul>
            <Link to="/request-service">
              <button className="btn-hosting">Order Now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(HostingItem);
