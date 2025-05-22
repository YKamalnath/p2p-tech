import React from 'react';
import "./InformationPage.css"
import Header from "../../Pages/InfromationPage/Header";
import WhatWeDo  from "../../Pages/InfromationPage/ourServices";
import WhyChooseUs  from "../../Pages/InfromationPage/WhyChooseUs";
import AboutUs  from "../../Pages/InfromationPage/AboutUShome";
import WhoCanUse from "../../Pages/InfromationPage/WhoCanUse";
import Services from "../../Pages/InfromationPage/Services";
import SuccessStories from "../../Pages/InfromationPage/SuccessStories";
import Staff from "../../Pages/InfromationPage/staffSection";
// import Questions from "../../Pages/InfromationPage/Questions";
import JoinCommunity from "../../Pages/InfromationPage/JoinCommunity";

const InformationPage = () => {
  return (
    <>
    <Header />
    <div className="main-home-container">
    <section id="what-we-do"><WhatWeDo /></section>
    <section id="why-choose-us"><WhyChooseUs /></section>
    <AboutUs/>
    <WhoCanUse />
    <Services />
    <JoinCommunity />

    </div>
    
      
    </>
  );
};

export default InformationPage;
