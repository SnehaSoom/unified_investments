import React from "react";
import logo from "./asset/logo.png"; // Import the image file
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"; // Import CSS file

const Banner = () => {
  return (
    <div className="background-container">
      <div className="banner">
        <div className="banner-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="banner-right">
          <nav className="horizontal-menu">
            <ul className="horizontal-menu-list">
              <li className="horizontal-menu-item">
                <a href="#" className="horizontal-menu-link">
                  COMPANY
                </a>
              </li>
              <li className="horizontal-menu-item">
                <a href="#" className="horizontal-menu-link">
                  INVESTORS
                </a>
              </li>
              <li className="horizontal-menu-item">
                <a href="#" className="horizontal-menu-link">
                  PRODUCTS
                </a>
              </li>
              <li className="horizontal-menu-item">
                <a href="#" className="horizontal-menu-link">
                  JOURNAL
                </a>
              </li>
              <li className="horizontal-menu-item">
                <a href="#" className="horizontal-menu-link">
                  REACH US
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="content-main-container">
        <div className="content-container">
          <div>
            <h1>Empower Your Business Finances</h1>
            <p>
              Your Expert Partner in Swift Business Financing, Bridging Gaps,
              and Ensuring Success. Thrive with Us!
            </p>
            <button>Discover More</button>
          </div>
        </div>
        <div className="carousel-container">
          <Slider>
              <div>
              <img src={("./asset/dubai_image.jpg")} alt="Image 1" />
              </div>           
            <div>
              <img src={("./asset/dubai_royalty.jpg")} alt="Image 2" />
            </div>
            <div>
              <img src={("./asset/dubai_photo.jpg")} alt="Image 3" />
            </div>
         </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
