import React, { useState } from 'react';
import './staffSection.css';

import staff1 from '../../assets/AboutUS/staff-01.svg';
import staff2 from '../../assets/AboutUS/staff-02.svg';
import staff3 from '../../assets/AboutUS/staff-03.svg';
import staff4 from '../../assets/AboutUS/staff-04.svg';
import staff5 from '../../assets/AboutUS/staff-05.svg';
import staff6 from '../../assets/AboutUS/staff-06.svg';
import staff7 from '../../assets/AboutUS/staff-07.svg';
import staff8 from '../../assets/AboutUS/staff-08.svg';

import Staffmobile from '../../assets/AboutUS/staff-phone-icon.svg';
import StafMail from '../../assets/AboutUS/staff-mail-icon.svg';
import StafWhat from '../../assets/AboutUS/staff-whatsapp-icon.svg';

import Pagination from '../../components/Pagination2/Pagination2';

const staffData = [
    { id: 1, name: 'Alex Johnson', role: 'Chief Executive Officer', image: staff1 },
    { id: 2, name: 'Samantha Lee', role: 'Chief Technology Officer', image: staff2 },
    { id: 3, name: 'Michael Chen', role: 'Project Manager', image: staff3 },
    { id: 4, name: 'Priya Sharma', role: 'UI/UX Designer', image: staff4 },
    { id: 5, name: 'David Kim', role: 'Frontend Developer', image: staff5 },
    { id: 6, name: 'Emily Garcia', role: 'Backend Developer', image: staff6 },
    { id: 7, name: 'Liam Smith', role: 'QA Engineer', image: staff7 },
    { id: 8, name: 'Nina Brown', role: 'DevOps Engineer', image: staff8 }
];

const Staff = () => {

    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const handlePageChange = (page) => {
    setCurrentPage(page);
    
  };
    
  return (
    <div className='staff-container'>
      <div className='our-academic'>MEET OUR TECH TEAM</div>
      <div className='inspiring-minds'>Driving Innovation and Building the Future</div>

      <div className='staff-layout'>
        {staffData.map((staff) => (
          <div key={staff.id} className='staff-box'>
            <img className='staff-img' src={staff.image} alt={`${staff.name}`} />
            <div className='staff-name'>{staff.name}</div>
            <div className='staff-role'>{staff.role}</div>
            <div className='staff-description'>
            Passionate about technology and committed to delivering excellence in every project.
            </div>
            <div className='staff-icon-layout'>
              <img src={Staffmobile} alt="Phone icon" />
              <img src={StafMail} alt="Mail icon" />
              <img src={StafWhat} alt="WhatsApp icon" />
            </div>
          </div>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange}
        styleType="primary"  
      />
    </div>
  );
};

export default Staff;
