import React, { useState } from "react";
import "./Questions.css";

const Questions = () => {
  const general = [
    {
      qus: "What are the benefits of using our online consultation booking system?",
      ans: `Our IT company's online consultation booking system offers several advantages:
      
  - **Convenience**: Schedule a meeting or consultation at your preferred time without needing to call or email.
  - **Faster Access to Experts**: Instantly see available slots and connect with our technical specialists or consultants.
  - **Easy Rescheduling**: Modify or cancel your appointments with just a few clicks.
  - **Reminders & Notifications**: Get automatic reminders via email or SMS so you never miss a session.
  - **Secure & Private**: Your information and communication with us are kept secure and confidential.`,
      num: 1,
    },
    {
      qus: "How do I book a consultation?",
      ans: `Booking a consultation is quick and easy:
      
  1. Go to our online booking page.
  2. Choose the service or department you wish to speak with (e.g., IT support, product demo, project planning).
  3. Select an available date and time.
  4. Fill in your contact information and confirm the booking.
  5. You’ll receive a confirmation email or SMS with all the details.`,
      num: 2,
    },
    {
      qus: "Can I book a session for someone else?",
      ans: `Yes! You can book a consultation on behalf of a colleague, team member, or client. Just provide their details during the booking process. If you need help, our support team is always ready to assist.`,
      num: 3,
    },
    {
      qus: "What if I need to cancel or reschedule my session?",
      ans: `We understand that schedules change. You can easily manage your booking:
      
  - Log in to your account and go to 'My Bookings.'
  - Select the session you want to change.
  - Choose a new time slot or cancel altogether.
  - We’ll send you an updated confirmation via email/SMS.`,
      num: 4,
    },
    {
      qus: "Do I need to create an account to book a consultation?",
      ans: `No, you can book a session as a guest. However, creating an account gives you extra features such as:
      
  - Faster future bookings
  - Viewing your session history
  - Tailored service suggestions and follow-ups`,
      num: 5,
    },
    {
      qus: "What types of consultations can I book online?",
      ans: `You can schedule a variety of services, including:
      
  - IT support sessions
  - Software demos and walkthroughs
  - Project planning or onboarding meetings
  - Cybersecurity consultations
  - Virtual product training`,
      num: 6,
    },
    {
      qus: "Will I receive a reminder for my consultation?",
      ans: `Yes! You will receive automated reminders via email and SMS before your scheduled session.`,
      num: 7,
    },
    {
      qus: "Is my information secure?",
      ans: `Absolutely. We use industry-standard encryption and privacy protocols to ensure your data is safe. Your personal and business details are never shared without your consent.`,
      num: 8,
    },
    {
      qus: "Can I book a virtual consultation?",
      ans: `Yes! All our consultations can be done virtually through secure video conferencing. This allows you to get expert advice from anywhere.`,
      num: 9,
    },
    {
      qus: "How do I prepare for a consultation?",
      ans: `To make the most of your session:
      
  - Ensure you have a stable internet connection.
  - Gather any relevant project files or questions beforehand.
  - Be ready a few minutes early for your scheduled time.`,
      num: 10,
    },
    {
      qus: "How do I contact support if I need help?",
      ans: `Our customer support team is here for you:
      
  - **Support Channels**: Contact us by phone at [Support Phone Number] or email at [Support Email Address].
  - **Working Hours**: We're available [Days of the week] from [Time] to [Time] [Time Zone].
  - **Live Chat**: Visit our website for real-time support via live chat.`,
      num: 11,
    },
  ];
  
 

  const jobSeekers = [
    {
      qus: "How do I book a consultation or career service?",
      ans: `Booking a session with our team is simple and convenient. Here's how you can do it:
  - **Search by Service or Specialist**: Use the search bar to find services like resume reviews, mock interviews, or job consulting.
  - **Apply Filters**: Refine results by date, availability, department (e.g., development, design, project management), or consultation type (virtual or in-person).
  - **Browse Consultant Profiles**: Learn more about our advisors’ experience and specialties.
  - **Pick a Time Slot**: Choose a date and time that works for you and confirm your booking.`,
      num: 1,
    },
    {
      qus: "What services can I book a session for?",
      ans: `Our platform offers a range of professional services to support your career goals:
  - **Career Coaching**: Get personalized guidance on job searching, switching careers, or professional growth.
  - **Resume and Portfolio Reviews**: Receive expert feedback to strengthen your applications.
  - **Mock Interviews**: Practice technical and behavioral interviews with real-time feedback.
  - **Skill Assessment Sessions**: Evaluate and benchmark your current skill level.
  - **Technical Consultation**: Book time with IT experts to explore project ideas or get help on tech skills.`,
      num: 2,
    },
    {
      qus: "How much do sessions cost?",
      ans: `Session pricing depends on several factors:
  - **Service Type**: Career coaching may differ in cost compared to technical consulting or mock interviews.
  - **Expertise Level**: Sessions with senior professionals or specialized consultants may carry higher fees.
  - **Packages**: Discounted packages may be available for bundled services.
  - **Free Sessions**: Some introductory or community sessions may be free of charge.`,
      num: 3,
    },
    {
      qus: "What happens after I book a session?",
      ans: `After successfully booking a session:
  - **Confirmation**: You'll receive a confirmation email or SMS with details.
  - **Reminders**: We’ll send timely reminders before your session.
  - **Join the Session**: Attend at the scheduled time, either virtually or in-person.
  - **Next Steps**: Depending on your session type, you may get follow-up resources or recommendations.`,
      num: 4,
    },
    {
      qus: "Is it guaranteed that I'll get a session with my preferred consultant?",
      ans: `While we aim to accommodate preferences, consultant availability depends on their schedule. Here's what you can do:
  - **Monitor for Openings**: Check for cancellations or updated availability.
  - **Explore Alternatives**: We suggest other qualified consultants in the same field.
  - **Book in Advance**: Popular consultants may require early booking.`,
      num: 5,
    },
    {
      qus: "What information should I provide when booking?",
      ans: `To ensure a smooth process, please provide:
  - **Your Name and Contact Info**: So we can confirm and send updates.
  - **Session Goal**: A brief summary of what you’re looking for (e.g., resume help, interview prep).
  - **Background Details**: Optionally, include a resume, portfolio link, or project description.
  - **Preferred Communication Style**: Let us know if you prefer video, phone, or chat.`,
      num: 6,
    },
    {
      qus: "How can I increase my chances of getting an earlier session?",
      ans: `Here are a few tips:
  - **Be Flexible**: Open availability gives you more options.
  - **Turn on Alerts**: Get notified when new slots open up.
  - **Try Group Sessions**: These may be available sooner than 1-on-1 consultations.
  - **Check Off-Hours**: Evening and weekend slots may have more availability.`,
      num: 7,
    },
    {
      qus: "Can I leave feedback after my session?",
      ans: `Yes! We encourage you to share your experience by leaving a review or rating. Your input helps us improve and helps others choose the right services.`,
      num: 8,
    },
    {
      qus: "What if I need to reschedule or cancel?",
      ans: `If your plans change:
  - **Use Your Account**: Log in and select the reschedule or cancel option.
  - **Contact Support**: Our support team can assist with changes.
  - **Review Policies**: Some services may have cancellation deadlines or fees.`,
      num: 9,
    },
    {
      qus: "How can I access career resources and support?",
      ans: `We offer multiple resources to support your growth:
  - **Career Guides**: Browse expert-written articles on job search, skills, and industry trends.
  - **Community Forums**: Join discussions, ask questions, and network with peers.
  - **Direct Messaging**: Communicate with consultants or our support team.
  - **Learning Programs**: Explore training in coding, design, project management, and more.`,
      num: 10,
    },
  ];
  
  

  const referrers = [
    {
      qus: "Who can offer their services on our platform?",
      ans: `Experienced and verified IT professionals, trainers, or consultants can list their services. Requirements include:
  - **Verified Expertise**: You must demonstrate proficiency in your field (e.g., software development, UI/UX design, cloud infrastructure).
  - **Relevant Experience**: Professionals should have real-world experience, certifications, or a strong project portfolio.
  - **Professional Conduct**: You must adhere to our platform's code of conduct and ethical standards while interacting with clients or learners.`,
      num: 1,
    },
    {
      qus: "How do I set my service fees?",
      ans: `You have full control over your pricing, which can vary based on:
  - **Area of Expertise**: Niche or in-demand skills like DevOps, AI/ML, or cybersecurity may justify higher rates.
  - **Session Type**: Live mentoring, project-based consulting, or training packages can be priced differently.
  - **Market Trends**: Review what others charge for similar services to stay competitive.
  - **Custom Packages**: Offer bundled services or discounts for long-term engagements.`,
      num: 2,
    },
    {
      qus: "What are my responsibilities as a service provider?",
      ans: `As a listed provider, you're expected to:
  - **Deliver Value**: Offer reliable, quality support, guidance, or services.
  - **Communicate Clearly**: Respond to messages and maintain a professional tone.
  - **Honor Commitments**: Be punctual and deliver on promised timelines.
  - **Maintain Your Profile**: Keep availability, services, and credentials up to date.`,
      num: 3,
    },
    {
      qus: "How do I receive payments for my services?",
      ans: `Payments are securely processed through the platform:
  - **Client Pre-Payment**: Clients pay before sessions or milestones begin.
  - **Auto Transfers**: Earnings are automatically deposited into your linked account on a scheduled basis.
  - **Earnings Dashboard**: Track your revenue, service history, and client feedback in real time.`,
      num: 4,
    },
    {
      qus: "What are the benefits of offering services through our platform?",
      ans: `Our platform provides several advantages:
  - **Reach a Broader Audience**: Connect with job seekers, startups, or companies in need of IT expertise.
  - **Flexible Scheduling**: Set your own working hours and service availability.
  - **Trusted Payments**: Enjoy secure and timely compensation with minimal hassle.
  - **Professional Exposure**: Gain credibility through verified profiles, reviews, and featured listings.`,
      num: 5,
    },
    {
      qus: "Can I decline a client request?",
      ans: `Yes, you're free to decline any service request if:
  - **The project is not a good fit** for your skillset or scope.
  - **The timeline conflicts** with your availability.
  - **You’re uncomfortable** with the client's request or expectations.`,
      num: 6,
    },
    {
      qus: "Are there limits to the number of clients I can take on?",
      ans: `There are no hard limits, but we recommend balancing your workload to ensure high-quality service and maintain positive client feedback.`,
      num: 7,
    },
    {
      qus: "How can I build a strong reputation on the platform?",
      ans: `To build and maintain a great reputation:
  - **Deliver high-quality work consistently**.
  - **Communicate proactively** with clients and learners.
  - **Collect Reviews**: Encourage clients to leave honest ratings after service completion.
  - **Showcase Achievements**: Update your profile with certifications, case studies, and testimonials.`,
      num: 8,
    },
    {
      qus: "What support do I receive as a provider?",
      ans: `We support you every step of the way:
  - **Technical Assistance**: Get help with profile setup, payments, or platform tools.
  - **Promotion**: High-performing providers may be featured in searches or campaigns.
  - **Dispute Resolution**: In case of client conflicts, we offer a structured resolution process.`,
      num: 9,
    },
  ];
  

  

  const payments = [
    {
      qus: "How do I book a session with an IT expert?",
      ans: "You can easily schedule a session through our online booking system. Just choose the service category, select an expert or team, and pick a convenient time slot. Confirm your details and finalize the booking with a secure payment.",
      num: 1,
    },
    {
      qus: "Are there any platform fees?",
      ans: "We don't charge additional booking fees for standard services. However, pricing depends on the expert's rates and session type. Please review the service fee breakdown before confirming your booking.",
      num: 2,
    },
    {
      qus: "What if I need to cancel my session?",
      ans: "You can cancel your session anytime through your dashboard. Refunds may be offered depending on the cancellation timing and our policy. Please review the cancellation terms during booking.",
      num: 3,
    },
    {
      qus: "Can I reschedule a session?",
      ans: "Yes, rescheduling is simple. Log in to your account, find the session under 'My Bookings,' and choose a new time slot. Rescheduling is allowed up to 24 hours before the original session time.",
      num: 4,
    },
    {
      qus: "How do I view my session history?",
      ans: "You can view all your upcoming and past sessions by navigating to the 'Bookings' section in your profile. You'll also find summaries, feedback, and invoices associated with each session.",
      num: 5,
    },
    {
      qus: "Can I book a session for a team member or colleague?",
      ans: "Yes, our platform supports multi-user bookings. You can schedule sessions on behalf of colleagues or team members by providing their details during the booking process.",
      num: 6,
    },
    {
      qus: "What happens if I miss my session?",
      ans: "If you miss your session without notice, a no-show fee may apply. We recommend canceling or rescheduling at least 24 hours in advance to avoid penalties.",
      num: 7,
    },
    {
      qus: "Can I request a second opinion from another expert?",
      ans: "Absolutely. You can book additional sessions with other experts to get multiple perspectives or deeper insights. Use our search feature to find the right specialist for your needs.",
      num: 8,
    },
    {
      qus: "What should I prepare before my session?",
      ans: "To get the most out of your session, prepare the following:\n- A brief project summary or issue description\n- Any relevant documents or access credentials\n- Specific questions or goals you'd like to address",
      num: 9,
    },
    {
      qus: "Can I book urgent or same-day sessions?",
      ans: "Yes, subject to expert availability. Some providers offer urgent consultations. Look for the 'Express Booking' badge or filter by availability to find same-day slots.",
      num: 10,
    },
  ];
  

  
  const privacyAndSecurity = [
    {
      qus: "How does the platform protect my data?",
      ans: "We take your privacy and data protection seriously. All user data is encrypted in transit and at rest. Access is restricted to authorized personnel, and we follow industry best practices for cybersecurity.",
      num: 1,
    },
    {
      qus: "Can I keep project details confidential when booking a session?",
      ans: "Yes, you're in control of what you share. You may choose to provide only a general overview during booking and share detailed information directly with the expert during the session.",
      num: 2,
    },
    {
      qus: "Who has access to my project or account information?",
      ans: "Only authorized team members and experts involved in your session will have access to your information. We enforce strict role-based access controls and comply with data privacy laws.",
      num: 3,
    },
    {
      qus: "How do I report suspicious activity on my account?",
      ans: "If you notice any unauthorized access or suspicious activity, please contact our support team immediately. We'll investigate and take appropriate action to secure your account.",
      num: 4,
    },
    {
      qus: "Can I control what data I share with IT consultants?",
      ans: "Yes, you decide what information to share. During the booking process, you can provide a brief overview or wait to discuss sensitive details during the session.",
      num: 5,
    },
    {
      qus: "Does the platform share my information with third parties?",
      ans: "We do not sell or share your personal or project information with third parties, unless required by law or with your explicit consent. Our policies are fully transparent and compliant with privacy regulations.",
      num: 6,
    },
    {
      qus: "What happens to my data if I cancel a session?",
      ans: "Your data remains secure and private even if you cancel a session. You can reschedule at your convenience, and your previously shared information is not used without your consent.",
      num: 7,
    },
    {
      qus: "Does the platform support two-factor authentication (2FA)?",
      ans: "Yes, we support 2FA to enhance account security. You can enable this in your account settings to add an extra verification step during login.",
      num: 8,
    },
    {
      qus: "How does the platform use cookies?",
      ans: "We use cookies to improve user experience, remember preferences, and personalize content. You can manage or disable cookies in your browser settings anytime.",
      num: 9,
    },
  ];
  

  const [selectedRadio, setSelectedRadio] = useState("general");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionData, setQuestionData] = useState(general);
  const [colourChange, setColourChange] = useState(true);

  const handleChange = (event) => {
    setSelectedRadio(event.target.value);
    setActiveQuestion(null);
    if (event.target.value === "general") {
      setQuestionData(general);
    }
    if (event.target.value === "jobSeekers") {
      setQuestionData(jobSeekers);
    }
    if (event.target.value === "referrers") {
      setQuestionData(referrers);
    }
    if (event.target.value === "payments") {
      setQuestionData(payments);
    }
    if (event.target.value === "privacyAndSecurity") {
      setQuestionData(privacyAndSecurity);
    }
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const formatAnswer = (answer) => {
    // Split the answer into individual lines
    const [firstLine, ...restOfTheAnswer] = answer.split("\n");

    return (
      <div>
        {/* Render the first line as-is */}
        <div>{firstLine}</div>

        {/* Iterate over the rest of the answer and render lines starting with a dash or normal text */}
        {restOfTheAnswer.map((line, index) => {
          // If the line starts with "-", render it as a bullet point
          if (line.startsWith("-")) {
            return (
              <div key={index} className="question-answer-line">
                {line.trim()}
              </div>
            );
          }
          // Otherwise, render the line normally
          return (
            <div key={index} className="question-answer-line">
              {line.trim()}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="main-questions-container">
      <div className="questions-heading">
        <h1 className="services-heading">
          Frequently Asked{" "}
          <span className="heading-different-color-resume">Questions</span>
        </h1>
        <div className="services-heading-des">
        Find quick answers to common questions about our platform, services, and security.
        </div>
      </div>

      <div className="questions-details-container">
        <div className="questions-filter-container">
          <div>Filter by category</div>
          <div>
          Quickly find the answers you need by browsing our most frequently asked questions,
        organized into helpful categories.
          </div>
          <div className="filter-radio-button-container">
            <label
              style={{
                color: selectedRadio === "general" ? "#007bff" : "inherit",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="general"
                checked={selectedRadio === "general"}
                onChange={handleChange}
              />
              General
            </label>
            <label
              style={{
                color: selectedRadio === "jobSeekers" ? "#007bff" : "inherit",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="jobSeekers"
                checked={selectedRadio === "jobSeekers"}
                onChange={handleChange}
              />
                Account Management
            </label>
            <label
              style={{
                color: selectedRadio === "referrers" ? "#007bff" : "inherit",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="referrers"
                checked={selectedRadio === "referrers"}
                onChange={handleChange}
              />
              Technical Support
            </label>
            <label
              style={{ color: selectedRadio === "payments" ? "#007bff" : "" }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="payments"
                checked={selectedRadio === "payments"}
                onChange={handleChange}
              />
               Payments & Billing
            </label>
            <label
              style={{
                color: selectedRadio === "privacyAndSecurity" ? "#007bff" : "",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="privacyAndSecurity"
                checked={selectedRadio === "privacyAndSecurity"}
                onChange={handleChange}
              />
              Privacy and Security
            </label>
          </div>
        </div>
        <div className="questions-des-container">
          {questionData.map((data) => (
            <div
              key={data.num}
              className="questions-container"
              style={{
                color: activeQuestion === data.num ? "#007bff" : "inherit",
                cursor: "pointer",
              }}
              onClick={() => toggleQuestion(data.num)}
            >
              <div className="question-header">
                <div>{data.qus}</div>
                <div>
                  {activeQuestion === data.num ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </div>
              </div>
              {activeQuestion === data.num && (
                <div className="question-answer">{formatAnswer(data.ans)}</div>
              )}
              <hr className="questions-hr" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
