
// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import Logo from "../../../assets/Images/logo-p2p.png";
// import { Link, useNavigate, useLocation  } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.css";


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoginModal, setIsLoginModal] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [userRole, setUserRole] = useState("patient"); // For sign-up
//   const isAuthenticated = localStorage.getItem("authToken");
//   const [showOptions, setShowOptions] = useState(false);
//   const location = useLocation();
//   const isHome = location.pathname === "/";
  


//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//     name: "",
//     userRole: "",
//   });

// // Automatically clear errors as the user types
// const handleEmailChange = (e) => {
//   setEmail(e.target.value);
//   setErrors((prevErrors) => ({
//     ...prevErrors,
//     email: "", // Clear email error on input change
//   }));
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
//   setErrors((prevErrors) => ({
//     ...prevErrors,
//     password: "", // Clear password error on input change
//   }));
// };

 

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     sessionStorage.removeItem("user");
//     window.location.href = "/login";
//   };

//   const handleDashboard = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log("User:", user);
  
//     const userRole = user?.role;
//     console.log("User Role:", userRole);
  
//     if (userRole === "doctor") {
//       navigate("/doctor/dashboard");
//     } else if (userRole === "patient") {
//       navigate("/patient/dashboard");
//     } else {
//       navigate("/");
//     }
//   };
  
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsLoginModal(false);
//   };

//   const handleLoginClick = () => {
//     setIsLoginModal(true);
//     setIsModalOpen(true);
//   };

//   const handleSignupClick = () => {
//     setIsLoginModal(false);
//     setIsModalOpen(true);
//   };

//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//   };


//   // Handle input change and clear error for each field
//   const handleInputChange = (field, setter) => (e) => {
//     setter(e.target.value);
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [field]: "", // Clear error message for the field
//     }));
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1023) {
//         setMenuOpen(false);
//       } else {
//         setMenuOpen(true);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const links = [
//     { text: "Our Services", href: "/our_Service" },
//     // { text: "Our Goal", href: "/Our_Goal" },
//     { text: " Our executives", href: "/Our_executives" },
//     { text: "FAQ", href: "/FAQ" },
//     // { text: "Help", href: "/_Help" },
//   ];

//   return (
//     <header>
//       <nav className="nav-container">
//         <div className="navbar-container">
//           <div className="logo-container">
//             <a href="/" className="logo-link">
//               <img src={Logo} alt="Bio World Logo" className="logo-image" />
//             </a>
//           </div>

//           {menuOpen && (
//             // <ul>
//             //   {links.map((link, index) => (
//             //     <li key={index} className="nav-menu-item">
//             //       <Link to={link.href} className="nav-link">
//             //         {link.text}
//             //       </Link>
//             //     </li>
//             //   ))}
//             <ul>
//               {links.map((link, index) => (
//                 <li key={index} className="nav-menu-item">
//                   <Link
//                     to={link.href}
//                     className={`nav-link ${isHome ? "home-link" : ""}`}
//                   >
//                     {link.text}
//                   </Link>
//                 </li>
//               ))}


//               {!isAuthenticated ? (
//                 <li>
//                   {/* <button 
//                   // onClick={handleSignupClick} 
//                   className="submit signin-button">
//                     Get Started 
//                   </button>
//                   <button 
//                   // onClick={handleLoginClick} 
//                   className="green-border signin-button">
//                     Learn more
//                   </button> */}
//                 </li>
//               ) : (
//                 <li>
//                   {window.innerWidth > 768 ? (
//                     <button
//                       onClick={() => setShowOptions(!showOptions)}
//                       className="green-border signin-button"
//                     >
//                       My Account
//                     </button>
//                   ) : (
//                     <div className="options-menu mobile-view">
//                       <button className="styled-button" onClick={handleLogout}>
//                         Logout
//                       </button>
//                       <button className="styled-button" onClick={handleDashboard}>
//                         Dashboard
//                       </button>
//                     </div>
//                   )}

//                   {showOptions && window.innerWidth > 768 && (
//                     <div className="options-menu">
//                       <button className="styled-button" onClick={handleDashboard}>
//                         Dashboard
//                       </button>
//                       <button className="styled-button" onClick={handleLogout}>
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </li>
//               )}
//             </ul>
//           )}
//           <div className="menu" onClick={handleMenuClick}>
//             {!menuOpen ? (
//               <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
//             ) : (
//               <i className="fa-solid fa-xmark" style={{ color: "white" }}></i>
//             )}
//           </div>
//         </div>
//       </nav>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close-modal" onClick={closeModal}>
//               &times;
//             </button>
//             {isLoginModal ? (
//               <div>
//                 <h2>Login</h2>
//                 <form 
//                 // onSubmit={handleLoginSubmit}
//                 >
//                   <div className="form-group">
//                     <label htmlFor="login-email">Email or User Name</label>
//                     <input
//                       type="text" // Changed from "email" to "text"
//                       id="login-identifier"
//                       className="form-control"
//                       value={email} // This variable now holds either email or name
//                       onChange={handleEmailChange}
//                       placeholder="Enter your email or name"
//                     />
//                     {errors.email && <div className="error">{errors.email}</div>}
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="login-password">Password</label>
//                     <input
//                       type="password"
//                       id="login-password"
//                       className="form-control"
//                       value={password}
//                       onChange={handlePasswordChange}
//                       placeholder="Enter your password"
//                     />
//                      {errors.password && <div className="error">{errors.password}</div>}
//                   </div>
//                   <button type="submit" className="submit-button">
//                     Login
//                   </button>
//                 </form>
//               </div>
//             ) : (
//               <div>
//                 <h2>Sign Up</h2>
//                 <form 
//                 // onSubmit={handleSignupSubmit}
//                 >
//                   <div className="form-group">
//                     <label htmlFor="signup-name">Name</label>
//                     <input
//                       type="text"
//                       id="signup-name"
//                       className="form-control"
//                       value={name}
//                       // onChange={(e) => setName(e.target.value)}
//                       onChange={handleInputChange("name", setName)}
//                       placeholder="Enter your name"
//                     />
//                     {errors.name && <div className="error">{errors.name}</div>}
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="signup-email">Email</label>
//                     <input
//                       type="email"
//                       id="signup-email"
//                       className="form-control"
//                       value={email}
//                       // onChange={(e) => setEmail(e.target.value)}
//                       onChange={handleInputChange("email", setEmail)}
//                       placeholder="Enter your email"
//                     />
//                     {errors.email && <div className="error">{errors.email}</div>}
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="signup-password">Password</label>
//                     <input
//                       type="password"
//                       id="signup-password"
//                       className="form-control"
//                       value={password}
//                       // onChange={(e) => setPassword(e.target.value)}
//                       onChange={handleInputChange("password", setPassword)} 
//                       placeholder="Create a password"
//                     />
//                     {errors.password && <div className="error">{errors.password}</div>}
//                   </div>
                  
//                   <button type="submit" className="submit-button">
//                     Sign Up
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/logo-p2p.png";
import ArrowDownIcon from "../../../assets/arrow-down-sign-to-navigate.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="main-nav-container">
          <h1 className="main-nav-brand">
            <Link to="/">
              <img className='nav-logo' src={Logo} alt="Company Logo" />
            </Link>
          </h1>
          
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            ☰
          </button>
          
          <div className={`main-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/our_Service">Our Services</Link>
            
            <div className="dropdown-container">
              <button 
                className="dropdown-toggle" 
                onClick={toggleResources}
                aria-expanded={isResourcesOpen}
              >
                Resources
                {/* <span className={`dropdown-arrow ${isResourcesOpen ? 'open' : ''}`}>▼</span> */}
                <img 
                src={ArrowDownIcon} 
                alt="Dropdown arrow" 
                className={`dropdown-arrow ${isResourcesOpen ? 'open' : ''}`} 
              />

              </button>
              {/* {isResourcesOpen && (
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <h3>References</h3>
                    <Link to="/blog">Blog</Link>
                    <Link to="/customer-stories">Customer stories</Link>
                    <Link to="/tutorials">Video tutorials</Link>
                    <Link to="/documentation">Documentation</Link>
                  </div>
                  <div className="dropdown-section">
                    <h3>Summary</h3>
                    <Link to="/about">About us</Link>
                    <Link to="/press">Press</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/legal">Legal</Link>
                  </div>
                </div>
              )} */}
            </div>
            
            <Link to="/Our_executives">Our executives</Link>
            <Link to="/FAQ">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Only show secondary nav when not in mobile view */}
      {!isMobileMenuOpen && (
        <nav className={`secondary-nav ${isResourcesOpen ? 'open' : ''}`}>
          <div className="secondary-nav-sections">
            <div className="secondary-nav-section">
              <h2 className="section-title">References</h2>
              <ul className="section-links">
                <li><Link to="/blog">Blog</Link><span>The latest industry news, updates, interesting articles and info.</span></li>
                <li><Link to="/customer-stories">Customer stories</Link><span>Learn how our customers are making big changes to their tech stack.</span></li>
                <li><Link to="/tutorials">Video tutorials</Link><span>Get up and running on new features and techniques with our tutorials.</span></li>
                <li><Link to="/documentation">Documentation</Link><span>All the boring stuff that you (hopefully won't) need, written by our team.</span></li>
              </ul>
            </div>

            <div className="secondary-nav-section">
              <h2 className="section-title">Summary</h2>
              <ul className="section-links">
                <li><Link to="/about">About us</Link><span>Learn about our story, our mission statement, and our roadmap.</span></li>
                <li><Link to="/press">Press</Link><span>News and writings, press releases, and press resources.</span></li>
                <li><Link to="/careers">Careers (We're hiring)</Link><span>We're always looking for talented people. Join our team!</span></li>
                <li><Link to="/legal">Legal</Link><span>All the boring stuff that Dan from legal made us add to the site.</span></li>
              </ul>
            </div>

            <div className="secondary-nav-notice">
              <p>We've just released an update!</p>
              <Link to="/analytics">Learn about our new analytics dashboard.</Link>
            </div>

            <div className="secondary-nav-version">
              Version 8.2
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;