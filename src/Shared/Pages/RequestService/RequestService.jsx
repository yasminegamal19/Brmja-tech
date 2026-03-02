import { memo } from "react";
import "./Request.modules.css";
import MainTitle from "../../Components/MainTitle/MainTitle";
const RequestService = ({title}) => {
  return (
    <div className="service-request py-5">
      <div className="container">
        <MainTitle title="Service Request" />
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <form className="row g-3">
              <div class="col-md-6">
                <label for="inputName4" class="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName4"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="col-md-6">
                <label for="inputNumber" class="form-label">
                  Phone Number *
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputNumber"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="col-md-6">
                <label for="inputNumber" class="form-label">
                  Service Type *
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Service</option>
                  <option value="1">Mobile Apps</option>
                  <option value="2">Software Development</option>
                  <option value="3">Systems & Platforms</option>
                  <option value="4">E-commerce Stores</option>
                  <option value="5">UI/UX Designs</option>
                  <option value="6">Technical Consulting</option>
                </select>
              </div>
              <div className="col-md-6">
                <label for="inputNumber" class="form-label">
                  Estimated Budget *
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select a budget</option>
                  <option value="1">Less than 50,000 EGP</option>
                  <option value="2">50,000 - 150,000 EGP</option>
                  <option value="3">150,000 - 250,000 EGP</option>
                  <option value="4">More than 250,000 EGP</option>
                </select>
              </div>
              <div className="col-12">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Project Details
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Describe your project and requirements"
                  ></textarea>
                </div>
              </div>
              <div class="col-xl-6 col-12">
                <button type="submit" class="btn btn-primary">
                  Submit Request
                </button>
              </div>
              <div class="col-xl-6 col-12">
                <button type="submit" class="btn btn-primary ">
                  Contact Via Whatsapp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RequestService);
