import React from "react";
import PhoneIcon from "./asset/PhoneIcon.svg";
import EmailIcon from "./asset/EmailIcon.svg";
import LocationIcon from "./asset/LocationIcon.svg";
import contact_image from "./asset/contact_image.jpg";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-left">
            <div className="contact-info-title">
              <h3>
                <span style={{ color: "#CACACA" }}> Let's Get In</span>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFE998 -7.7%, #57370D 83.51%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Touch With Us
                </span>
              </h3>
            </div>
            <div className="contact-info-item">
              <img src={PhoneIcon} alt="Phone Icon" className="icon" />
              <p>+971-05 44 33 88 66</p>
            </div>
            <div className="contact-info-item">
              <img src={EmailIcon} alt="Phone Icon" className="icon" />
              <p>info@unifiedinvestment.ae</p>
            </div>
            <div className="contact-info-item">
              <img src={LocationIcon} alt="Phone Icon" className="icon" />
              <p>
                Unified Investments, 2nd floor, Al Amal St - <br /> Business
                Bay-Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src={contact_image} alt="contact image" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
