import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import "./Contact.css";
import topAnimationData from "../../img/animation_contact.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [lastEmailTime, setLastEmailTime] = useState(Date.now() - 60000); // Initialize to a time that allows immediate email sending

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a minute has passed since last email
    if (Date.now() - lastEmailTime >= 60000) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          contactForm,
          process.env.REACT_APP_PUBLIC_KEY,
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success(
              "Email sent successfully! You will get respond within 24 hours.",
            );
            setLastEmailTime(Date.now()); // Update last email time
          },
          (err) => {
            console.error("FAILED...", err);
            toast.error("Failed to send email.");
          },
        );
    } else {
      toast.error("You can send only one email per minute. Please wait.");
    }
  };

  return (
    <div id="contact" className="contact-section">
      <ToastContainer />
      <h2 className="contact-section-title" >Contact</h2>
      <div className="contact-form-wrapper">
        <form className="contact-section-contact-form" onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faUser} /> 
          <input type="text" name="name" onChange={handleChange} placeholder=" " />
          <span>Name</span>
        </label>
        <label>
          <FontAwesomeIcon icon={faEnvelope} /> 
          <input type="email" name="email" onChange={handleChange} placeholder=" " />
          <span>Email</span>
        </label>
        <label>
          <FontAwesomeIcon icon={faComment} />
          <textarea name="message" onChange={handleChange} placeholder=" "></textarea>
          <span>Message</span>
        </label>
          <button type="submit">Send</button>
        </form>
        <div className="animation-wrapper">
          <Lottie animationData={topAnimationData} autoplay loop style={{ width: "300px", margin: "0 auto" }} />
        </div>
      </div>
    </div>
  );
  
};

export default Contact;
