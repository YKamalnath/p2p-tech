
// import React from 'react';
import "./Header.css";

import React, { useState, useEffect } from 'react';
import cover1 from '../../assets/Cover_img/home-cover.jpg';
import cover2 from '../../assets/Cover_img/Dark-lep.jpg';
import cover3 from '../../assets/Cover_img/Roboto.webp';
import cover4 from '../../assets/Cover_img/photo-01.jpg';
import cover5 from '../../assets/Cover_img/123image.png';
// import CustomButton from "../../../../components/CustomButton/CustomButton";

const Landing = () => { 
  const images = [cover1, cover2, cover3, cover4, cover5];
  const [currentImage, setCurrentImage] = useState(0);

  const handleIndicatorClick = (index) => {setCurrentImage(index);}

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000); 

      return () => clearInterval(interval);
  }, [images.length]);



  

  

  return (

    
    <div className="back_img" style={{position:`absolute`,
      backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(15, 45, 118, 0.73) 0%, rgba(0, 29, 102, 0.73) 100%), url(${images[currentImage]})`
  }}>
      
      <div className="main-containerh">
        <div className="content-container">
          <p className="top-text">Empowering Innovation Through</p>
          <h1 className="main-heading">Height Quality Software<span className="yellow">Development</span></h1>
          <div className="text-container">
            <p className="description">
              
             
              <div>Welcome to our software development company, where we turn ideas into powerful digital solutions. Our expert team builds modern web and mobile applications tailored to your business needs. </div>Whether you're a startup or an enterprise, we deliver scalable, efficient, and secure tech that drives success.
            </p>
          </div>
          
          {/* <CustomButton
            label="Learn More"
            onClick={() => {}}
            type="LearnMoreBtn"
            disabled={false}
          /> */}
          {/* <img
            src={toggle} 
            alt="Description"
            className="custom-image"
          /> */}

          <div className="carousel-indicators">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${currentImage === index ? 'active' : ''}`}
                      onClick={() => handleIndicatorClick(index)}
                    ></span>
                  ))}
                </div>
              
        </div>
      </div>
    </div>
  );
};

export default Landing; 

