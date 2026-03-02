import { memo } from "react";
import MainTitle from "../MainTitle/MainTitle";
import './Contact.modules.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = ({title, desc}) => {
    return (
      <div className="contact py-5" id="contact">
        <div className="container">
          <MainTitle
            title="Contact Us"
            desc="We are here to help you achieve your digital vision. Contact us now!"
          />
          <div className="row">
            <div className="col-xl-5 col-12">
              <div className="contact-info">
                <div className="info-item">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span>Address</span>
                    <p>Faisal, Giza, Egypt</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span>Phone</span>
                    <p>+20 101 059 5705</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span>Email</span>
                    <p>hello@brmja.tech</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-12">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputName4" class="form-label">
                    Full Name
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
                    Phone Number
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
                    Service Type
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Services</option>
                    <option value="1">Web Development</option>
                    <option value="2">Mobile Apps</option>
                    <option value="3">SoftWare Development</option>
                    <option value="4">UI/UX Design</option>
                    <option value="3">ERP Systems</option>
                    <option value="3">Technical Consulting</option>
                  </select>
                </div>
                <div className="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Example textarea
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tell us about your project or inquiry...."
                    ></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

}

export default memo(Contact);