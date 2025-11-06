import React from "react";
import { motion } from "framer-motion";
import "./VoicesOfFlavor.css";
import manEating from "../assets/manEating.png";

const VoicesOfFlavor = () => {
  return (
    <section className="voices-section">
      <motion.div
        className="voices-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4>ABOUT US</h4>
        <h2>Voices of Flavor</h2>
      </motion.div>

      <div className="voices-content-wrapper">
        {/* Image */}
        <motion.div
          className="voices-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={manEating} alt="Man enjoying food at café" />
        </motion.div>

        <motion.div
          className="voices-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 15px 35px rgba(242, 106, 46, 0.3)",
            transition: { duration: 0.4 },
          }}
        >
          <motion.p
            className="quote"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              color: "#f26a2e",
              textShadow: "0 0 20px rgba(242,106,46,0.4)",
            }}
          >
            “Zeal Taste is a revelation in street food! The gourmet dishes are not only delicious but
            also beautifully presented. The food truck experience is both convenient and indulgent.
            I can't get enough of their truffle mac & cheese!”
          </motion.p>

          <motion.p
            className="name"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{
              color: "#f26a2e",
              textShadow: "0 0 15px rgba(242,106,46,0.5)",
              scale: 1.05,
            }}
          >
            John Smith
          </motion.p>

          <motion.p
            className="location"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            whileHover={{
              color: "#004c3f",
              textShadow: "0 0 15px rgba(0,76,63,0.4)",
              scale: 1.03,
            }}
          >
            San Francisco, CA
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VoicesOfFlavor;
