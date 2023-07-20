import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import "./Contact.css";
import topAnimationData from "../../img/animation_contact.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Contact
      </h2>
      <div className="contact-form-wrapper">
        <form
          className="contact-section-contact-form"
          onSubmit={handleSubmit}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <label>
            <span>Name</span>
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" onChange={handleChange}></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <div
          className="animation-wrapper"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Lottie
            animationData={topAnimationData}
            autoplay
            loop
            style={{ width: "300px", margin: "0 auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
