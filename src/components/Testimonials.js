import React from 'react';
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-title">
        <h1>TESTIMONIALS</h1>
        </div>
        <div>
        <p>
          "In this contemporary world where customer service is usually dead,
          this company revives it. They are responsive, they listen, and act on what they hear."
        </p>
        <p>- Satisfied Client 1</p>
      </div>
      <div className="testimonial">
        <p>
          "I have never seen such dedication towards work; these guys are always ready for challenges."
        </p>
        <p>- Satisfied Client 2</p>
      </div>
    </div>
  );
};

export default Testimonials;
