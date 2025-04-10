

import React, { useState,useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./SuccessStories.css";
import memberImage1 from "../../assets/Images/member-1.jpg";
import memberImage2 from "../../assets/Images/member-2.jpg";
import memberImage3 from "../../assets/Images/member-3.jpg";

import ArrowPrevious from "../../assets/Images/arrow-previous.svg";
import ArrowNext from "../../assets/Images/arrow-next.svg";

const SuccessStories = () => {
  const successStoriesData = [
    {
      name: "John D.",
      designation: "Software Engineer",
      des: "Our team’s productivity skyrocketed after adopting this IT solution. The tools they provided made collaboration seamless, and the support team has been outstanding in addressing our needs. Highly recommend it for any tech-driven business.",
      memberImg: memberImage1, // Update with team member image
    },
    {
      name: "Anna P.",
      designation: "IT Manager",
      des: "As an IT manager, I was always on the lookout for reliable tech solutions. This platform transformed the way we handle server management, and the analytics we now have at our disposal are invaluable for improving our operations.",
      memberImg: memberImage2, // Update with team member image
    },
    {
      name: "Michael W.",
      designation: "CTO",
      des: "The automation features of this platform saved us countless hours of manual work. The integration was smooth, and our systems are now running more efficiently than ever. It’s truly a game-changer for any IT department.",
      memberImg: memberImage3, // Update with team member image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === successStoriesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successStoriesData.length - 1 : prevIndex - 1,
    );
  };

  const currentStory = successStoriesData[currentIndex];
  const nextProfile =
    successStoriesData[(currentIndex + 1) % successStoriesData.length];
  const thirdProfile =
    successStoriesData[(currentIndex + 2) % successStoriesData.length];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-success-stories-container">
      <h1 className="services-heading">
        Our Client <span className="heading-different-color-resume">Success Stories</span>
      </h1>
      <div className="services-heading-des">
        Read about how our innovative IT solutions helped clients improve their business operations.
      </div>
      <div {...handlers} className="main-our-success-stories-container">
        <div>
          <div>
            <div className="success-stories-container">
              <div className="member-privious-button-container">
                <img
                  src={ArrowPrevious}
                  alt="Previous"
                  className="member-privious-next-button"
                  onClick={handlePrevious}
                />
              </div>
              <div>
                <div className="stories-description-container">
                  <div>{currentStory.name}</div>
                  <div>{currentStory.designation}</div>
                  <div>{currentStory.des}</div>
                </div>
                <div className="profile-images-container">
                  <div>
                    <div>
                      <div className="first-member-image-container">
                        <img
                          className="current-member-image"
                          src={currentStory.memberImg}
                          alt="member-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="members-image-container">
                        <img
                          className="other-member-image"
                          src={nextProfile.memberImg}
                          alt="member-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="members-image-container">
                        <img
                          className="other-member-image"
                          src={thirdProfile.memberImg}
                          alt="member-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-next-button-container">
                <img
                  src={ArrowNext}
                  alt="Next"
                  className="member-privious-next-button"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
          <div className="circles-container">
            {successStoriesData.map((_, index) => (
              <div
                key={index}
                className={`circle ${index === currentIndex ? "active-circle" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
