import React from "react";
import "./ReservationForm.css";
import { motion } from "framer-motion";
import { FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";

const ReservationForm = () => {
  return (
    <section className="reservation-section">
      <motion.h4
        className="reservation-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        BOOK YOUR TABLE
      </motion.h4>

      <motion.h2
        className="reservation-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Make a Reservation
      </motion.h2>

      <motion.p
        className="reservation-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Call +1 (800) 555-1234 from 5a – 11p daily, or book online<br />
        Reservations required for parties of 4 or more.
      </motion.p>

      <motion.form
        className="reservation-form"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <input type="text" placeholder="Your name" />
        <div className="form-row">
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
        </div>
        <div className="form-row">
          <input type="datetime-local" placeholder="Date time" />
          <input type="number" placeholder="Seats" />
        </div>
        <textarea placeholder="Message"></textarea>

        <motion.button
          type="submit"
          className="reservation-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Table
        </motion.button>
      </motion.form>

      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {[FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP].map((Icon, index) => (
          <motion.div
            key={index}
            whileHover={{ rotate: 15, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="footer-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Developed by <span>ZealousWeb</span> &nbsp;|&nbsp; Powered by <span>Webflow</span>
      </motion.p>

      <motion.div
        className="footer-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>Licenses</p>
        <p>Instructions</p>
      </motion.div>
    </section>
  );
};

export default ReservationForm;
