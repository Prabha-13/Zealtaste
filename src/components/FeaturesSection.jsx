import React from "react";
import { FaDollarSign, FaCouch, FaMedal } from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            <FaDollarSign />
          </div>
          <h3>Reasonable Prices</h3>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaCouch />
          </div>
          <h3>Cozy Atmosphere</h3>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaMedal />
          </div>
          <h3>Good Quality Products</h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
