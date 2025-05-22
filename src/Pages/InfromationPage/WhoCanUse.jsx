// import React from "react";
// import "./WhoCanUse.css";
// import WhoCanUseImage from "../../assets/Images/db-Photoroom.png"; 

// const WhoCanUse = () => {
//   return (
//     <div className="WhoCanUse">
//       <div className="whocanuse-des-container">
//         <div>Clients</div>
//         <div>
//         Leverage cutting-edge IT solutions to streamline your business operations,
//           improve efficiency, and drive innovation. Our services range from software
//           development and IT consulting to system integration and cloud solutions,
//           all tailored to your specific business needs.
//         </div>
        
//       </div>
//       {/* <div className="whocanuse-img-container"> */}
//       <img
//         className="whocanuse-image"
//         src={WhoCanUseImage} // Updated to use the renamed import
//         alt="WhoCanUse-image"
//       />
//       {/* </div> */}
//       <div className="whocanuse-des-container">
//         <div>Professionals</div>
//         <div>
//         Collaborate on diverse and challenging projects by providing technical
//           expertise, software development, and IT infrastructure management. As an IT
//           professional, you'll work with clients to create scalable, efficient, and
//           secure technology solutions that drive digital transformation.
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default WhoCanUse;

import React from "react";
import { motion } from "framer-motion";
import { FaBusinessTime, FaUserTie } from "react-icons/fa";
import "./WhoCanUse.css";

const WhoCanUse = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="WhoCanUse"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="whocanuse-des-container" variants={itemVariants}>
        <div className="whocanuse-header">
          <FaBusinessTime className="whocanuse-icon" />
          <span>Clients</span>
        </div>
        <div>
          Leverage cutting-edge IT solutions to streamline your business operations,
          improve efficiency, and drive innovation. Our services range from software
          development and IT consulting to system integration and cloud solutions,
          all tailored to your specific business needs.
        </div>
      </motion.div>

      <motion.div 
        className="whocanuse-icon-container"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div className="whocanuse-circle">
          <FaBusinessTime className="large-icon" />
          <FaUserTie className="large-icon" />
        </div>
      </motion.div>

      <motion.div className="whocanuse-des-container" variants={itemVariants}>
        <div className="whocanuse-header">
          <FaUserTie className="whocanuse-icon" />
          <span>Professionals</span>
        </div>
        <div>
          Collaborate on diverse and challenging projects by providing technical
          expertise, software development, and IT infrastructure management. As an IT
          professional, you'll work with clients to create scalable, efficient, and
          secure technology solutions that drive digital transformation.
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhoCanUse;