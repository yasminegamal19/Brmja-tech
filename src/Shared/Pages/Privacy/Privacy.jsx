import { memo } from "react";
import "./Privacy.modules.css";
import { Link } from "react-router-dom";
import MainTitle from "../../Components/MainTitle/MainTitle";

const Privacy = ({title}) => {
  return (
    <div className="privacy py-5">
      <div className="container">
        <div className="privacy-card">
          <MainTitle title="Privacy Policy" />
          <p className="intro">
            Brmja Tech is a software development company that builds websites,
            mobile apps, and ERP systems.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            information when you visit <strong>brmja.tech</strong>, contact us,
            or use our services.
          </p>

          <div className="policy-section">
            <h4>1. Information We Collect</h4>
            <ul>
              <li>Contact details (name, email, phone).</li>
              <li>Company information and project requirements.</li>
              <li>Files or materials you share with us.</li>
              <li>Basic analytics and cookie data for improving experience.</li>
              <li>
                If you pay online, payment details are processed securely by
                trusted gateways — we do not store full card data.
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h4>2. How We Use Your Data</h4>
            <ul>
              <li>To respond to inquiries and prepare proposals.</li>
              <li>To deliver, maintain, and improve our services.</li>
              <li>To provide technical support and communication.</li>
              <li>
                To send updates about our services or offers (only with your
                consent).
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h4>3. Data Sharing</h4>
            <p>
              We may share data with trusted service providers such as hosting,
              analytics, payment processors, and communication tools — all under
              strict confidentiality and data-processing agreements.
            </p>
            <p className="highlight">We do NOT sell personal data.</p>
          </div>

          <div className="policy-section">
            <h4>4. Security & Data Retention</h4>
            <p>
              We apply reasonable technical and organizational security measures
              to protect your information and retain data only as long as needed
              for the stated purposes or as required by law.
            </p>
          </div>

          <div className="policy-section">
            <h4>5. Your Rights & Choices</h4>
            <p>You may request:</p>
            <ul>
              <li>Access to your personal data.</li>
              <li>Correction of inaccurate information.</li>
              <li>Deletion of your data where applicable.</li>
              <li>Control of cookies through your browser settings.</li>
            </ul>
          </div>

          <div className="policy-section contact-us">
            <h4>6. Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <a href="mailto:support@brmja.tech">support@brmja.tech</a>
          </div>
          <div className="back-home mt-4 text-center">
            <Link to="/" className="btn-back-home">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Privacy);
