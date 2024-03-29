import React, { useState } from "react";
import logo from "./asset/logo.png"; // Import the image file
import dubai from "./asset/dubai_image.jpg";
import royal from "./asset/dubai_royalty.jpg";
import dubaiPP from "./asset/dubai_photo.jpg";
import "./Banner.css"; // Import CSS file

const menuItems = [
  { text: "COMPANY", link: "#" },
  { text: "INVESTORS", link: "investors#",submenu: [
    { text: "Investor Relations", link: "investors#ir" },
    { text: "Financial Reports", link: "investors#reports" },
    // Add more submenu items as needed
  ] },
  { text: "PRODUCTS", link: "products#" },
  { text: "JOURNAL", link: "journal#" },
  { text: "REACH US", link: "reach-us#" },
];

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
              {menuItems.map((item, index) => (
                <li className="horizontal-menu-item" key={index}>
                  <a href={item.link} className="horizontal-menu-link">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="content-main-container">
        <div className="content-container">
          <div className="content-box">
            <h1>Empower Your</h1>
            <h1>
              Business <span className="text-gradiant">Finances</span>
            </h1>
            <p>Your Expert Partner in Swift Business Financing,</p>
            <p>Bridging Gaps, and Ensuring Success. Thrive with</p>
            <p>Us!</p>
            <button>Discover More</button>
          </div>
        </div>
        <div className="carousel-container">
          <Slider />
          <div className="social-media-text">
            <span className="social-media-gap">Facebook</span>
            <span className="social-media-gap">Instagram</span>
            <span className="social-media-gap">Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

export function Slider() {
  const [selectedSlider, setSelectedSlider] = useState(0);

  const imgArray = [
    {
      path: dubai,
    },
    {
      path: royal,
    },
    {
      path: dubaiPP,
    },
  ];

  const handlePrevious = (index) => {
    setSelectedSlider(index === 0 ? imgArray.length - 1 : index - 1);
  };

  const handleNext = (index) => {
    setSelectedSlider(index < imgArray.length - 1 ? index + 1 : 0);
  };

  return (
    <div className="carousel-parent-container">
      {imgArray.map((ele, index) => {
        if (selectedSlider === index) {
          return (
            <>
              <div className="carousel" key={index}>
                <img src={ele.path} alt={index} />
              </div>
              <div className="carousel-btn">
                <button onClick={() => handlePrevious(index)}>
                  <svg
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.00193 5.31727L16.9978 5.68257M1.00193 5.31727L5.39802 9.91884M1.00193 5.31727L5.6035 0.921181"
                      stroke="#E6E6E6"
                    />
                  </svg>
                </button>
                <button onClick={() => handleNext(index)}>
                  <svg
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 5.5H0M16 5.5L11.5 1M16 5.5L11.5 10"
                      stroke="#E6E6E6"
                    />
                  </svg>
                </button>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
