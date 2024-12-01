import React, { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";

function ContactCard() {
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };
  
      emailjs
        .send(
          "service_nobo687", // Replace with your EmailJS service ID
          "template_c8n9whe", // Replace with your EmailJS template ID
          templateParams,
          "JFp7NP73pxViAgUon" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log("FAILED...", err);
            setIsSubmitting(false);
          }
        );
    };
  
  
  return (
    <div className="contact padding-top padding-bottom">
      <div className="container contactCart">
        <div className="contact__wrapper">
          <div className="row g-5">
            <div className="col-md-5">
              <div className="contact__info" data-aos="fade-right" data-aos-duration="1000">
                <div className="contact__social">
                  <h3>let’s <span>{`get in touch `}</span>
                    with us</h3>
                  {/* <ul className="social">
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4 active"><i className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4 "><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4"><i className="fa-brands fa-linkedin-in"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4"><i className="fab fa-youtube"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link href="" className="social__link social__link--style4"><i className="fab fa-twitter"></i></Link>
                    </li>
                  </ul> */}
                </div>
                <div className="contact__details">
                  <div className="contact__item" data-aos="fade-right" data-aos-duration="1000">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <span><img src="/images/contact/support.jpg" alt="contact-icon" className="dark supportclock" /></span>
                      </div>
                      <div className="contact__item-content">
                        <p>
                          {/* <Link href="tel:+447441448582">+44 744 144 8582</Link> */}
                          Round-the-Clock Support.
                                                  </p>
                        <p>
                          {/* <Link href="tel:+8801313941166">+880 131 394 1166</Link> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__item" data-aos="fade-right" data-aos-duration="1100">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <span><img src="/images/contact/supp24.jpg" alt="contact-icon" className="dark supportclock" /></span>
                      </div>
                      <div className="contact__item-content">
                        <p>
                          {/* <Link target="_blank" href="mailto:mail@thetork.com">mail@thetork.com</Link> */}
                          Your Questions,
                        </p>
                        <p>
                        Answered Within 24 Hours.
                          {/* <Link target="_blank" href="mailto:support@thetork.com">support@thetork.com</Link> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__item" data-aos="fade-right" data-aos-duration="1200">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <span><img src="/images/contact/reliablesupport-dark.jpg" alt="contact-icon" className="dark reliablesupp" /></span>
                      </div>
                      <div className="contact__item-content">
                        <p>
                        Rapid Response,
                                                </p>
                        <p>
                        Reliable Support.
                          {/* 534 Victoria Trail */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact__form">
              {isSubmitted ? (
                  <h4>Thank you for contacting us! We will get back to you shortly.</h4>
                ) : (
                  <form onSubmit={handleSubmit} data-aos="fade-left" data-aos-duration="1000">
                    <div className="row g-4">
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email here"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                          cols="30"
                          rows="5"
                          className="form-control"
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Enter Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary mt-4 d-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Contact Us Now"}
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__shape">
        <span className="contact__shape-item contact__shape-item--1"><img src="/images/contact/4.png"
          alt="shape-icon" /></span>
        <span className="contact__shape-item contact__shape-item--2"> <span></span> </span>
      </div>
    </div>
  );
}

export default ContactCard;
