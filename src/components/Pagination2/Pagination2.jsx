
import leftArrow from '../../assets/Pagination/left-arrow.svg'; 
import rightArrow from '../../assets/Pagination/right-arrow.svg'; 

import React from 'react'; 
import './Pagination2.css'; 

const Pagination2 = ({ currentPage, totalPages, onPageChange, styleType = 'primary'  }) => {
  const maxVisiblePages = 3;  
  const pages = [];

  
  for (let i = 1; i <= maxVisiblePages && i <= totalPages; i++) {
    pages.push(i);
  }

  
  if (currentPage > maxVisiblePages + 1) {
    pages.push('...');
  }

  
  if (currentPage > maxVisiblePages && currentPage < totalPages) {
    pages.push(currentPage);
  }

  
  if (currentPage < totalPages - 1 && totalPages > maxVisiblePages) {
    pages.push('...');
  }

  
  if (!pages.includes(totalPages) && totalPages > maxVisiblePages) {
    pages.push(totalPages);
  }

  return (
    <nav>
      <ul className={`pagination2 pagination2-${styleType}`}>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage - 1)} 
            disabled={currentPage === 1}>
           <img className='next' src={leftArrow}></img>
          </button>
        </li>

        {pages.map((page, index) => (
          <li 
            key={index} 
            className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}>
            {page === '...' ? (
              <span className="page-link">...</span>
            ) : (
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            )}
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}>
            <img className='next' src={rightArrow}></img>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination2;

