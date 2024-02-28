import React, { useState, useEffect } from "react";
import { sendEmail } from "../../services/emailService";
import Lottie from "lottie-react";
import "./Contact.css";
import topAnimationData from "../../img/animation_contact.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [lastEmailTime, setLastEmailTime] = useState(Date.now() - 60000); 

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Date.now() - lastEmailTime < 60000) {
      toast.error("You can send only one email per minute. Please wait.");
      return;
    }

    if (sendEmail(contactForm, setLastEmailTime)) {
      setContactForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-section-title" data-aos="zoom-out-down">
        Contact
      </h2>
      <div className="contact-form-wrapper">
        <form
          className="contact-section-contact-form"
          data-aos="flip-left"
          onSubmit={handleSubmit}
        >
          <label>
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder=" "
            />
            <span>Name</span>
          </label>
          <label>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder=" "
            />
            <span>Email</span>
          </label>
          <label>
            <FontAwesomeIcon icon={faComment} />
            <textarea
              name="message"
              onChange={handleChange}
              placeholder=" "
            ></textarea>
            <span>Message</span>
          </label>
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Send
          </button>
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
