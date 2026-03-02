import react from "react";
import "./Copy-Right.modules.css";

const CopyRight = () => {
  return (
    <>
      <div className="copy-right py-5">
        <div className="container">
          <div className="row">
            <p className="col-xl-6 col-12 text-white">
              © 2026 Brmja Tech. All rights reserved.
            </p>
            <div className="col-xl-6 col-4 icons">
              <i class="fa-brands fa-facebook-f me-3 text-white"></i>
              <i class="fa-brands fa-linkedin-in text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
