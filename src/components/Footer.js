import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FooterImage from "./asset/Footer_image.jpg";
import instagram from "./asset/Instagram.jpg";
import facebook from "./asset/Facebook.png";
import linkedIn from "./asset/LinkedIn.png";
import "./Footer.css";

const Footer = () => {
  const menuLinks = [
    { id: 1, label: "Company", to: "/company" },
    { id: 2, label: "Investor", to: "/investors" },
    { id: 3, label: "Products", to: "/products" },
    { id: 4, label: "Journal", to: "/journal" },
    { id: 5, label: "Reach Us", to: "/reach-us" },
  ];

  const usefulLinks = [
    {
      id: 1,
      label: "Home",
      to: "/home",
    },
    {
      id: 2,
      label: "Company",
      to: "/company",
    },
    {
      id: 3,
      label: "Privacy Policy",
      to: "/privacy-policy",
    },
    {
      id: 4,
      label: "Terms and Conditions",
      to: "/terms-and-conditions",
    },
    {
      id: 5,
      label: "Return and Refund",
      to: "/return-and-refund",
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-contact">
          <img src={FooterImage} alt="Footer " />
          <p style={{textAlign: "justify"}}>
            Interior Design Center Inc. A USA Based<br /> Photo Editing Company in
            Tokyo, Japan.<br /> Corporation NO. 524172-2,<br /> Check Here
          </p>
          <p>+88(019)04-000012</p>
          <p>Info.01241588@gmail</p>
        </div>
        <div className="footer-menu-link">
          <div className="footer-menu-title">Menu</div>
          <div className="footer-links">
            {menuLinks.map((link) => (
              <div key={link.id}>
                <Link to={link.to}>{link.label}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-useful-link">
          <div className="footer-useful-link-tile">Useful Links</div>
          <div className="footer-links">
            {usefulLinks.map((link) => (
              <div key={link.id}>
                <Link to={link.to}>{link.label}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-title">Follow Us</div>
          <div className="footer-social-icon">
            <img src={instagram} alt="Instagram" style={{borderRadius: "7px"}}/>
            <img src={facebook} alt="Facebook"/>
            <img src={linkedIn} alt="LinkedIn"/>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        {/* Your other components */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
