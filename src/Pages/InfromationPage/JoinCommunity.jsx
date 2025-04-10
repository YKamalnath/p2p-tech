
import React from "react";
import "./JoinCommunity.css";

const JoinCommunity = () => {
  return (
    <div className="main-joincommunity-container">
      <div>
        <div className="JoinCommunity-details-container">
          <h2 className="joincommunity-heading">
            Stay Ahead with{" "}
            <span className="heading-different-color">P2P Tech Innovations</span>
          </h2>
          <p>
            Subscribe to Our Newsletter for the Latest IT Solutions and Insights
          </p>
          <p>
            Join our community to stay informed about new software updates, cutting-edge technology trends, success stories, and exclusive offers. Get valuable IT updates directly to your inbox.
          </p>
          <div className="input-container">
            <input className="email-input" placeholder="Enter your email here" />
            <button
              className="submit community-button"
              onClick={() => console.log("Button clicked!")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
