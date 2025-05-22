import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // added faEnvelope

const Contact = () => {
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
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5" style={{ position: "relative" }}>
      <div className="container">
        <h2 className="text-center mb-4 flex items-center justify-center gap-3">
          Contact Me
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-700"
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
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>

            {isSubmitted && (
              <div className="alert alert-success mt-4" role="alert">
                Thank you! Your message has been sent.
              </div>
            )}

            {isError && (
              <div className="alert alert-danger mt-4" role="alert">
                Please fill out all fields correctly or check your internet connection.
              </div>
            )}

            <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/john-drexler-mora-3a7744122/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mr-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-2" />
              </a>

              <a
                href="https://github.com/drexlermora"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mr-2"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" className="mr-2" />
              </a>

              <a
                href="https://www.facebook.com/drexler.mora"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </section>
  );
};

export default Contact;
