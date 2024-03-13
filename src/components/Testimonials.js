import React from "react";
import danialImage from "./asset/testimonial_danial.png";
import johnImage from "./asset/testimonial_john.png";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Danial H",
    role: "CEO GetNextDesign",
    text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    image: danialImage,
  },
  {
    name: "John H",
    role: "Design",
    text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    image: johnImage,
  },
  {
    name: "Danial H",
    role: "CEO GetNextDesign",
    text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    image: danialImage,
  },
  {
    name: "John H",
    role: "Design",
    text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    image: johnImage,
  },
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
            <img src={testimonial.image} alt={testimonial.name} />
            <p className="testimonial-text">{testimonial.text}</p>
            <h4 className="testimonial-text">{testimonial.name}</h4>
            <small className="testimonial-text">{testimonial.role}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
