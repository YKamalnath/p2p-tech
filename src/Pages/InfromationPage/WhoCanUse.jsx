import React from "react";
import "./WhoCanUse.css";
import WhoCanUseImage from "../../assets/Images/db-Photoroom.png"; 

const WhoCanUse = () => {
  return (
    <div className="WhoCanUse">
      <div className="whocanuse-des-container">
        <div>Clients</div>
        <div>
        Leverage cutting-edge IT solutions to streamline your business operations,
          improve efficiency, and drive innovation. Our services range from software
          development and IT consulting to system integration and cloud solutions,
          all tailored to your specific business needs.
        </div>
        
      </div>
      {/* <div className="whocanuse-img-container"> */}
      <img
        className="whocanuse-image"
        src={WhoCanUseImage} // Updated to use the renamed import
        alt="WhoCanUse-image"
      />
      {/* </div> */}
      <div className="whocanuse-des-container">
        <div>Professionals</div>
        <div>
        Collaborate on diverse and challenging projects by providing technical
          expertise, software development, and IT infrastructure management. As an IT
          professional, you'll work with clients to create scalable, efficient, and
          secure technology solutions that drive digital transformation.
        </div>
        
      </div>
    </div>
  );
};

export default WhoCanUse;
