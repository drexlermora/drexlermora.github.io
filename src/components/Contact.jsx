import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      input::placeholder,
      textarea::placeholder {
        color: #ffffff !important;
        opacity: 1 !important;
        filter: brightness(100%);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    return name && email && message && /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSubmitted(false);

    if (!validateForm()) {
      setIsError(true);
      return;
    }

    emailjs
      .sendForm(
        "drexlermora_svid",
        "template_k56nwbs",
        e.target,
        "oVppYxZNeacD3WiS1"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setIsError(true);
        }
      );
  };

  const motionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="contact-section py-5 bg-black text-white"
      style={{ position: "relative" }}
    >
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={motionVariants}
      >
        <h2 className="text-center mb-4 flex items-center justify-center gap-3 text-white">
          Contact Me
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white"
            style={{ fontSize: "2.5rem", marginLeft: "0.5rem" }}
            aria-label="Contact Me"
            title="Contact Me"
          />
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control bg-black text-white border-white"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderWidth: "1.5px" }}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control bg-black text-white border-white"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderWidth: "1.5px" }}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="message"
                  className="form-control bg-black text-white border-white"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ borderWidth: "1.5px" }}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-light"
                  style={{ borderWidth: "1.5px" }}
                >
                  Send Message
                </button>
              </div>
            </form>

            {isSubmitted && (
              <div
                className="alert alert-success mt-4"
                role="alert"
                style={{ backgroundColor: "#222", color: "#d1e7dd", borderColor: "#badbcc" }}
              >
                Thank you! Your message has been sent.
              </div>
            )}

            {isError && (
              <div
                className="alert alert-danger mt-4"
                role="alert"
                style={{ backgroundColor: "#222", color: "#f8d7da", borderColor: "#f5c2c7" }}
              >
                Please fill out all fields correctly or check your internet connection.
              </div>
            )}

            <div className="text-center mt-4 space-x-4">
              {[ 
                {
                  href: "https://www.linkedin.com/in/john-drexler-mora-3a7744122/",
                  icon: faLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/drexlermora",
                  icon: faGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.facebook.com/drexler.mora",
                  icon: faFacebook,
                  label: "Facebook",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                  style={{
                    filter: "grayscale(100%) brightness(150%)",
                    borderRadius: "0.375rem",
                    padding: "0.375rem 0.75rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "0.5rem"
                  }}
                  aria-label={label}
                  title={label}
                >
                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            aria-label="Scroll to top"
            title="Scroll to top"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              border: "none",
              padding: "0.5rem 0.7rem",
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              zIndex: 1000,
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
