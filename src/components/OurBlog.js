import React from "react";
import photo from "./asset/our_blog_image.png";
import burj_khalifa from "./asset/our_blog_burj_khalifa.png";
import night from "./asset/our_blog_night.png";
import "./OurBlog.css";

const OurBlogs = () => {
  return (
    <div>
      <div className="our-blogs">
        <div className="our-blogs-content">
          <h2 className="title">
            OUR <span className="text-gradient">BLOGS</span>
          </h2>
          <p className="description">
            We provide our investors with fully-managed, high-yield investment
            products catering to all levels of risk appetite. Our team has the
            expertise to provide all of our investors with the education,
            guidance and support required to maximize profits both from a short
            and long-term perspective through their entire investment journey.
          </p>
        </div>
      </div>
      <div className="our-blogs-image">
        <div className="our-blog-image-left">
          <img src={photo} alt="Photo" />
        </div>
        <div className="our-blog-image-right">
          <div className="our-blog-image-right-upper">
            <div className="our-blog-image-right-upper-image">
              <img src={burj_khalifa} alt="Burj Khalifa" />
            </div>
            <div className="our-blog-image-right-upper-content">
              <p>DEVELOPMENT 11March 2023</p>
              <p>Best Website to research for your next project</p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs
              </p>
              <button>Read More...</button>
            </div>
          </div>
          <div className="our-blog-image-right-lower">
            <div className="our-blog-image-right-lower-content">
            <p>DEVELOPMENT 11March 2023</p>
              <p>Best Website to research for your next project</p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs
              </p>
              <button>Read More...</button>
            </div>
            <div className="our-blog-image-right-lower-image">
            <img src={night} alt="Night" />
            </div>
          </div>
        </div>
      </div>
      <div className="our-blogs-button">
        <button className="explore-more-button">Explore More</button>
      </div>
    </div>
  );
};

export default OurBlogs;
