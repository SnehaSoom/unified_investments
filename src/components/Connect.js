import React from "react";
import "./Connect.css";

export const Connect = () => {
  return (
    <div className="connect-container">
      <div className="connect-title">
        <span className="title-color">We are Dedicated</span>
        <span className="title-color-text">
          {" "}
          to the Expansion <br />
          of
        </span>
        <span className="title-color"> your Business</span>
      </div>
      <div className="connect-button">
        <button className="connect-button-btn">
          <span style={{ color: "#906312" }}>FOR</span>{" "}
          <span style={{ color: "#080808" }}>INDIVIDUAL</span>
        </button>
        <button className="connect-button-btn">
          <span style={{ color: "#906312" }}>FOR</span>{" "}
          <span style={{ color: "#080808" }}>CORPORATE</span>
        </button>
      </div>
      <div className="connect-btn">
        <button className="connect-btn-connect">Let’s Connect</button>
      </div>
    </div>
  );
};
