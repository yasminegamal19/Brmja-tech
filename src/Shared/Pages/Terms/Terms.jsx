import { memo } from "react";
import "./Terms.modules.css";
import MainTitle from "../../Components/MainTitle/MainTitle";

const Terms = ({title}) => {
  return (
    <div className="terms py-5">
      <div className="container">
        <div className="terms-card">
          <MainTitle title="Terms & Conditions" />
          <p className="intro">
            Welcome to Brmja Tech. By accessing our website or engaging our
            services, you agree to these Terms.
          </p>

          <div className="terms-section">
            <h4>1. Services</h4>
            <p>
              We provide discovery and consulting, UX/UI design, custom software
              development (web, mobile, ERP), deployment, optional hosting, and
              support plans.
            </p>
          </div>

          <div className="terms-section">
            <h4>2. Proposals & Payments</h4>
            <p>
              Scope, timelines, and pricing are defined in proposals or
              Statements of Work (SOWs). Invoices are due as stated, and
              milestones may apply.
            </p>
            <p>
              Taxes, gateway fees, and any third-party costs are the client's
              responsibility unless agreed otherwise.
            </p>
          </div>

          <div className="terms-section">
            <h4>3. Content & Responsibilities</h4>
            <p>
              The client must provide accurate content, assets, and approvals on
              time and ensure they own the rights to use any materials shared
              with us.
            </p>
          </div>

          <div className="terms-section">
            <h4>4. Intellectual Property</h4>
            <p>
              After full payment, the client owns the final deliverables for the
              project as specified in the proposal.
            </p>
            <p>
              Brmja Tech retains ownership of internal libraries, reusable
              components, and know-how. Open-source components remain under
              their respective licenses.
            </p>
          </div>

          <div className="terms-section">
            <h4>5. Timelines</h4>
            <p>
              Project schedules depend on timely feedback and deliverables from
              the client. Changes in scope may affect cost and timeline through
              change requests.
            </p>
          </div>

          <div className="terms-section">
            <h4>6. Warranties & Support</h4>
            <p>
              We fix verified defects within an agreed warranty window after
              delivery. Enhancements, new features, hosting/provider issues, and
              third-party changes are billed separately.
            </p>
          </div>

          <div className="terms-section">
            <h4>7. Confidentiality</h4>
            <p>
              Both parties agree to keep all non-public information
              confidential.
            </p>
          </div>

          <div className="terms-section">
            <h4>8. Limitation of Liability</h4>
            <p>
              To the maximum extent permitted by law, Brmja Tech is not liable
              for indirect or consequential damages.
            </p>
            <p className="highlight">
              Our total liability is limited to the fees paid for the affected
              service.
            </p>
          </div>

          <div className="terms-section">
            <h4>9. Termination</h4>
            <p>
              Either party may terminate upon written notice for material breach
              or for convenience, subject to settlement of due fees and
              delivered work.
            </p>
          </div>

          <div className="terms-section">
            <h4>10. Governing Law</h4>
            <p>
              These Terms are interpreted under applicable laws. Any disputes
              will be handled by the competent courts in the relevant
              jurisdiction.
            </p>
          </div>

          <div className="terms-section contact-us">
            <h4>11. Contact</h4>
            <p>If you have questions regarding these Terms, contact us at:</p>
            <a href="mailto:support@brmja.tech">support@brmja.tech</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Terms);
