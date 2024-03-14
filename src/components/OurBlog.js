import React from "react";
import photo from "./asset/our_blog_image.png";
import burj_khalifa from "./asset/our_blog_burj_khalifa.png";
import night from "./asset/our_blog_night.png";
import "./OurBlog.css";

const OurBlogs = () => {
  return (
    <div className="our-blogs-container">
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
        <div
          className="our-blog-image-left"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="our-blog-image-left-content">
            <div className="blog-box-heading">
              <div className="heading">
                <span>DEVELOPMENT</span>
              </div>
              <div className="data">
                <span>11 March 2023</span>
              </div>
            </div>
            <div className="blog-box-content">
              <p>Best Website to research for your next project</p>
            </div>
            <div className="blog-box-story">
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs
              </p>
            </div>
            <div className="blog-box-button">
              <button>Read More...</button>
            </div>
          </div>
        </div>
        <div className="our-blog-image-right">
          <div className="our-blog-image-right-upper">
            <div className="our-blog-image-right-upper-image">
              <img src={burj_khalifa} alt="Burj Khalifa" />
            </div>
            <div className="our-blog-image-right-upper-content">
              <div className="blog-box-heading">
                <div className="heading">
                  <span>DEVELOPMENT</span>
                </div>
                <div className="data">
                  <span>11 March 2023</span>
                </div>
              </div>
              <div className="blog-box-content">
                <p>Best Website to research for your next project</p>
              </div>
              <div className="blog-box-story">
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs{" "}
                </p>
              </div>
              <div className="blog-box-button">
                <button>Read More...</button>
              </div>
            </div>
          </div>
          <div className="our-blog-image-right-upper">
            <div className="our-blog-image-right-upper-content">
              <div className="blog-box-heading">
                <div className="heading">
                  <span>DEVELOPMENT</span>
                </div>
                <div className="data">
                  <span>11 March 2023</span>
                </div>
              </div>
              <div className="blog-box-content">
                <p>Best Website to research for your next project</p>
              </div>
              <div className="blog-box-story">
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs{" "}
                </p>
              </div>
              <div className="blog-box-button">
                <button>Read More...</button>
              </div>
            </div>
            <div className="our-blog-image-right-upper-image">
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
