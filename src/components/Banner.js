import React, { useState } from "react";
import logo from "./asset/logo.png"; // Import the image file
import dubai from "./asset/dubai_image.jpg";
import royal from "./asset/dubai_royalty.jpg";
import dubaiPP from "./asset/dubai_photo.jpg";
import left from "./asset/left.svg";
import right from "./asset/right.svg";
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
            <h1>Empower Your Business <span className="text-gradiant">Finances</span></h1>
            <p>
              Your Expert Partner in Swift Business Financing, Bridging Gaps,
              and Ensuring Success. Thrive with Us!
            </p>
            <button>Discover More</button>
          </div>
        </div>
        <div className="carousel-container">
          <Slider />
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
      path: dubai
    },
    {
      path: royal
    },
    {
      path: dubaiPP
    }
  ]

  const handlePrevious = (index) => {
    setSelectedSlider((index === 0) ? imgArray.length - 1 : index - 1);
  }

  const handleNext = (index) => {
    setSelectedSlider((index < imgArray.length - 1) ? index + 1 : 0);
  }


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
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00193 5.31727L16.9978 5.68257M1.00193 5.31727L5.39802 9.91884M1.00193 5.31727L5.6035 0.921181" stroke="#E6E6E6" />
                  </svg>
                </button>
                <button onClick={() => handleNext(index)}>
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 5.5H0M16 5.5L11.5 1M16 5.5L11.5 10" stroke="#E6E6E6" />
                  </svg>
                </button>

              </div>

            </>
          )
        }
      })}

    </div>

  )
}
