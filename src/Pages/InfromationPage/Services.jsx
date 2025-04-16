import React, { useState } from "react";
import "./Services.css";
import ServicesIcon from "../../assets/Images/cv-png.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const ServicesData = [
    {
      heading: "Custom Software Development",
      des: "We specialize in building custom software solutions tailored to your business needs. From web applications to enterprise systems, our team ensures the highest quality and performance.",
    },
    {
      heading: "Cloud Solutions",
      des: "Transform your business with scalable and secure cloud solutions. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.",
    },
    {
      heading: "IT Consulting & Support",
      des: "Our experienced IT consultants provide strategic advice to improve your technology infrastructure and operations. We also offer ongoing support to ensure smooth business operations.",
    },
  ];

  const handleLearnMore = () => {
    navigate("/service-detail");
  };

  return (
    <div className="main-services-container">
      <h1 className="services-heading">
        Innovative IT Solutions for Your Business
      </h1>
      <div className="services-heading-des">
        Explore how our custom IT services can enhance your business performance and security.
      </div>
      <div className="services-container">
        {ServicesData.map((data, index) => (
          <div key={index} className="sub-services-container">
            <div>
              <img
                className="services-icon-image"
                src={ServicesIcon}
                alt="services-icon-image"
              />
              <div className="services-sub-heading">{data.heading}</div>
              <div className="services-des">{data.des}</div>
              <button className="custombtn"  onClick={handleLearnMore}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
