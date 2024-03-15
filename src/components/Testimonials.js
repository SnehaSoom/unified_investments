import React from "react";
import danialImage from "./asset/testimonial_danial.png";
import johnImage from "./asset/testimonial_john.png";
import quote from "./asset/quote.svg";
import star from "./asset/stars.svg";
import "./Testimonials.css";

const testimonials = [
  {
    name1: "Danial H",
    role1: "CEO GetNextDesign",
    text1:
      "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    image1: danialImage,
    name2: "John H",
    role2: "Design",
    text2:
      "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    image2: johnImage,
  },

  // {
  //   name: "Danial H",
  //   role: "CEO GetNextDesign",
  //   text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  //   image: danialImage,
  // },
  // {
  //   name: "John H",
  //   role: "Design",
  //   text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
  //   image: johnImage,
  // },
];

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-title">
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="testimonial-section">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-left">
              <div>
                <img src={danialImage} alt={testimonial.name1} />
              </div>
              <div>
                <div>
                  <quote />
                  <star />
                </div>
                <p className="testimonial-text">{testimonial.text1}</p>
                <h4 className="testimonial-text">{testimonial.name1}</h4>
                <small className="testimonial-texts">{testimonial.role1}</small>
              </div>
            </div>
            <div class="vertical-line"></div>
            <div className="testimonial-right">
              <div>
                <img src={johnImage} alt={testimonial.name2} />
              </div>
              <div>
                <div>
                  <quote />
                  <star />
                </div>
                <p className="testimonial-text">{testimonial.text2}</p>
                <h4 className="testimonial-text">{testimonial.name2}</h4>
                <small className="testimonial-texts">{testimonial.role2}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
