
// import React, { useState } from "react";
// import "./JoinCommunity.css";

// const JoinCommunity = () => {
//   const [showForm, setShowForm] = useState(false);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message , date, time } = e.target.elements;

//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: name.value,
//           email: email.value,
//           message: message.value,
//           date: date.value,
//           time: time.value,
//         }),
//       });

//       const data = await response.json();
//       if (response.status === 200) {
//         alert('Request sent successfully!');
//       } else {
//         alert('Error sending request. Please try again later.');
//       }
//     } catch (error) {
//       alert('Error sending request. Please try again later.');
//     }

//     setShowForm(false);
//   };
//   return (
//     <div className="main-joincommunity-container">
//       <div>
//         <div className="JoinCommunity-details-container">
//           <h2 className="joincommunity-heading">
//             Stay Ahead with{" "}
//             <span className="heading-different-color">P2P Tech Innovations</span>
//           </h2>
//           <p>
//             Subscribe to Our Newsletter for the Latest IT Solutions and Insights
//           </p>
//           <p>
//             Join our community to stay informed about new software updates, cutting-edge technology trends, success stories, and exclusive offers. Get valuable IT updates directly to your inbox.
//           </p>
//           <div className="input-container">
//             <input className="email-input" placeholder="Enter your email here" />
//             <button
//               className="submit community-button"
//               onClick={() => console.log("Button clicked!")}
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinCommunity;


import React, { useState } from "react";
import "./JoinCommunity.css";

const JoinCommunity = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, date, time } = e.target.elements;

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
          date: date.value,
          time: time.value,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        alert('Request sent successfully!');
      } else {
        alert('Error sending request. Please try again later.');
      }
    } catch (error) {
      alert('Error sending request. Please try again later.');
    }

    setShowForm(false);
  };

  return (
    <div className="main-joincommunity-container">
      <div>
        <div className="JoinCommunity-details-container">
          <h2 className="joincommunity-heading">
            Stay Ahead with{" "}
            <span className="heading-different-color">P2P Tech Innovations</span>
          </h2>
          <p>
            Subscribe to Our Newsletter for the Latest IT Solutions and Insights
          </p>
          <p>
            Join our community to stay informed about new software updates, cutting-edge technology trends, success stories, and exclusive offers. Get valuable IT updates directly to your inbox.
          </p>
          
          <button 
            className="contact-us-button"
            onClick={() => setShowForm(true)}
          >
            Contact Us
          </button>
        </div>
      </div>

      {showForm && (
        <div className="contact-modal-overlay">
          <div className="contact-modal">
            <button 
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <h2 className="modal-heading">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input type="date" id="date" />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <input type="time" id="time" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinCommunity;