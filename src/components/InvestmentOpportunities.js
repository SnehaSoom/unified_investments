import React from "react";
import "./InvestmentOpportunities.css";

const InvestmentOpportunities = () => {
  return (
    <div className="investment-opportunities">
      <div className="investment-content-opportunities">
        <div className="investment-content-bg"></div>
        <div>
          <h2 className="title">INVEST IN <span className="text-gradient">DUBAI</span></h2>
        </div>
        <div>
          <p className="description">
            We provide our investors with fully-managed, high-yield investment
            products catering to all levels of risk appetite. Our team has the
            expertise to provide all of our investors with the education, guidance
            and support required to maximize profits both from a short and long-term
            perspective through their entire investment journey.
          </p>
        </div>
        <div className="benefits">
          <div className="benefit">
            <div style={{display : 'flex', flexWrap : 'wrap' }}>
              <h2 className="benefit-title">High Fixed Returns</h2>
            </div>
            <div>
              <p className="benefit-description">
                Build your wealth with a personalised, diversified portfolio with
                expert advice.
              </p>
            </div>
          </div>
          <div className="benefit">
            <div>
              <h2 className="benefit-title">Outperforming Market</h2>
            </div>
            <div>
              <p className="benefit-description">
                Earn returns that are greater than the market average with minimal
                risk and a broader risk profile, we've proudly been beating the
                market since 2016 for our clients.
              </p>
            </div>

          </div>
          <div className="benefit">
            <div>
              <h2 className="benefit-title">Get Funded</h2>
            </div>
            <div>
              <p className="benefit-description">
                Operating under a model of profit sharing, we make money when our
                investors make money and our success depends on your success.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default InvestmentOpportunities;
