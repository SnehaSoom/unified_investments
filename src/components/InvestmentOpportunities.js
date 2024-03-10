import React from "react";
import "./InvestmentOpportunities.css";

const InvestmentOpportunities = () => {
  return (
    <div className="investment-opportunities">
      <h2 className="title">INVEST IN <span className="text-gradient">DUBAI</span></h2>
      <p className="description">
        We provide our investors with fully-managed, high-yield investment
        products catering to all levels of risk appetite. Our team has the
        expertise to provide all of our investors with the education, guidance
        and support required to maximize profits both from a short and long-term
        perspective through their entire investment journey.
      </p>
      <div className="benefits">
        {/* <div className="benefit">
          <h2 className="benefit-title">High Fixed Returns</h2>
          <p className="benefit-description">
            Build your wealth with a personalised, diversified portfolio with
            expert advice.
          </p>
        </div>
        <div className="benefit">
          <h2 className="benefit-title">Outperforming Market</h2>
          <p className="benefit-description">
            Earn returns that are greater than the market average with minimal
            risk and a broader risk profile, we've proudly been beating the
            market since 2016 for our clients.
          </p>
        </div>
        <div className="benefit">
          <h2 className="benefit-title">Get Funded</h2>
          <p className="benefit-description">
            Operating under a model of profit sharing, we make money when our
            investors make money and our success depends on your success.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
