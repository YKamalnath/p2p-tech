import React from "react";
import "./ServiceDetail.css";
import SoftwareIcon from "../../assets/SoftwareIcon-01.png"; 
import CloudIcon from "../../assets/CloudIcon.png";
import ConsultingIcon from "../../assets/ConsultingIcon-02.png";

const serviceDetails = [
  {
    icon: SoftwareIcon,
    heading: "Custom Software Development",
    description:
      "From concept to code, we design scalable, secure, and robust custom software tailored to your exact needs. Whether it's a startup MVP or a full-scale enterprise system, we bring your vision to life with modern technologies and agile practices.",
    features: [
      "Web and Mobile App Development",
      "UI/UX Design and Prototyping",
      "API Development & Integration",
      "Enterprise-grade Software Architecture",
    ],
  },
  {
    icon: CloudIcon,
    heading: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to boost efficiency, scalability, and resilience. We offer end-to-end cloud services from migration to maintenance, ensuring you’re future-ready.",
    features: [
      "Cloud Migration & Optimization",
      "AWS, Azure & GCP Expertise",
      "DevOps & CI/CD Implementation",
      "Cloud Security & Compliance",
    ],
  },
  {
    icon: ConsultingIcon,
    heading: "IT Consulting & Support",
    description:
      "Bridge the gap between technology and business with our expert IT consulting. We assess, plan, and support IT strategies that align with your goals—while offering 24/7 support to keep operations smooth.",
    features: [
      "Technology Strategy & Roadmapping",
      "Infrastructure Audits",
      "Cybersecurity Consulting",
      "Ongoing IT Support Services",
    ],
  },
];

const ServiceDetail = () => {
  return (
    <div className="service-detail-container">
      <h1 className="service-detail-heading">Our Core Services</h1>
      <p className="service-detail-subtext">
        Explore our range of services designed to elevate your business through cutting-edge technology.
      </p>
      <div className="services-grid">
        {serviceDetails.map((service, index) => (
          <div key={index} className="service-card-02">
            <img src={service.icon} alt={service.heading} className="service-icon" />
            <h2 className="service-title-02">{service.heading}</h2>
            <p className="service-description-02">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;

