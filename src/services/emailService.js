import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const sendEmail = (contactForm, setLastEmailTime) => {
  const { name, email, message } = contactForm;

  // Simple validation
  if (!email.trim() || !name.trim() || !message.trim()) {
    toast.error("Please fill in all fields.");
    return false; 
  }

  emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    contactForm,
    process.env.REACT_APP_PUBLIC_KEY,
  ).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Email sent successfully! You will get a response within 24 hours.");
      setLastEmailTime(Date.now()); 
    },
    (err) => {
      console.error("FAILED...", err);
      toast.error("Failed to send email.");
    },
  );

  return true; 
};

