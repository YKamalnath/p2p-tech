
import React from 'react';
import './CustomButton.css';

const CustomButton = ({ label, onClick, type, disabled, icon, customStyle }) => {
  const buttonClassName = `button ${type}`;

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      style={customStyle} 
    >
      {label}
      {icon && <img src={icon}  alt="icon" className="button-icon" />} 
    </button>
  );
};

export default CustomButton;
