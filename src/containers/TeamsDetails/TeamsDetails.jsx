
// import React, { useState } from 'react';
// import './TeamsDetails.css';

// import staff1 from '../../assets/AboutUS/staff-01.svg';
// import staff2 from '../../assets/AboutUS/staff-02.svg';
// import staff3 from '../../assets/AboutUS/staff-03.svg';
// import staff4 from '../../assets/AboutUS/staff-04.svg';


// import Staffmobile from '../../assets/AboutUS/staff-phone-icon.svg';
// import StafMail from '../../assets/AboutUS/staff-mail-icon.svg';
// import StafWhat from '../../assets/AboutUS/staff-whatsapp-icon.svg';

// const staffData = [
//     { id: 1, name: 'Alex Johnson', role: 'Chief Executive Officer', image: staff1 },
//     { id: 2, name: 'Samantha Lee', role: 'Chief Technology Officer', image: staff2 },
//     { id: 3, name: 'Michael Chen', role: 'Project Manager', image: staff3 },
//     { id: 4, name: 'Priya Sharma', role: 'UI/UX Designer', image: staff4 },
    
// ];

// const TechTeam = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages = 10;

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     return (
//         <div className='tech-team-container'>
//             <div className='section-title'>MEET OUR TECH TEAM</div>
//             <div className='section-subtitle'>Driving Innovation and Building the Future</div>

//             <div className='team-member-layout'>
//                 {staffData.map((staff) => (
//                     <div key={staff.id} className='team-member-card'>
//                         <img className='team-member-img' src={staff.image} alt={`${staff.name}`} />
//                         <div className='team-member-name'>{staff.name}</div>
//                         <div className='team-member-role'>{staff.role}</div>
//                         <div className='team-member-description'>
//                             Passionate about technology and committed to delivering excellence in every project.
//                         </div>
//                         <div className='team-member-icons'>
//                             <img src={Staffmobile} alt="Phone icon" />
//                             <img src={StafMail} alt="Mail icon" />
//                             <img src={StafWhat} alt="WhatsApp icon" />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TechTeam;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSmartphone, 
  FiMail, 
  FiMessageSquare,
  FiUser,
  FiCode,
  FiLayers,
  FiPenTool,
  FiSettings
} from 'react-icons/fi';
import './TeamsDetails.css';

const staffData = [
  { 
    id: 1, 
    name: 'Alex Johnson', 
    role: 'Chief Executive Officer', 
    icon: <FiUser className="team-icon" /> 
  },
  { 
    id: 2, 
    name: 'Samantha Lee', 
    role: 'Chief Technology Officer', 
    icon: <FiCode className="team-icon" /> 
  },
  { 
    id: 3, 
    name: 'Michael Chen', 
    role: 'Project Manager', 
    icon: <FiLayers className="team-icon" /> 
  },
  { 
    id: 4, 
    name: 'Priya Sharma', 
    role: 'UI/UX Designer', 
    icon: <FiPenTool className="team-icon" /> 
  },
];

const TechTeam = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className='tech-team-container'>
      <motion.div 
        className='section-title'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MEET OUR TECH TEAM
      </motion.div>
      
      <motion.div 
        className='section-subtitle'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Driving Innovation and Building the Future
      </motion.div>

      <motion.div 
        className='team-member-layout'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {staffData.map((staff) => (
          <motion.div 
            key={staff.id} 
            className='team-member-card'
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
            }}
          >
            <div className='team-member-icon-container'>
              {staff.icon}
            </div>
            <div className='team-member-name'>{staff.name}</div>
            <div className='team-member-role'>{staff.role}</div>
            <div className='team-member-description'>
              Passionate about technology and committed to delivering excellence in every project.
            </div>
            <div className='team-member-icons'>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiSmartphone className="contact-icon" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiMail className="contact-icon" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiMessageSquare className="contact-icon" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTeam;