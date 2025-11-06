import React from "react";
import { motion } from "framer-motion";  
import "./SignatureSelections.css";

const dishes = [
  { 
    name: "Truffle Mac & Cheese", 
    price: "$12", 
    img: "https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e2d589bc6ce894bf403c0d_thumbnail%20(4).avif",
    description: "Creamy macaroni and cheese infused with the rich aroma of truffle oil, topped with a crispy breadcrumb crust."
  },
  { 
    name: "Gourmet Beef Sliders", 
    price: "$15", 
    img: "https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e2d5896f357a2950188f1a_thumbnail%20(5).avif",
    description: "Juicy beef patties grilled to perfection, served on toasted brioche buns with caramelized onions and a tangy aioli sauce."
  },
  { 
    name: "Spicy Shrimp Tacos", 
    price: "$14", 
    img: "https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e2d5896f4d40ef62318f40_thumbnail%20(6).avif",
    description: "Fresh shrimp marinated in a spicy blend, served in soft tortillas with avocado crema and a zesty lime drizzle."
  },
  { 
    name: "Vegetable Tempura", 
    price: "$10", 
    img: "https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e2d589d1e36ddd748e501e_thumbnail%20(7).avif",
    description: "A colorful assortment of seasonal vegetables lightly battered and fried, served with dipping sauce."
  },
];

const SignatureSelections = () => {
  return (
    <section className="signature-section">
      <h3 className="signature-heading">FEATURED DELICACIES</h3>
      <h2 className="signature-title">Signature Selections</h2>

      <div className="signature-grid">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            className="signature-card"
            initial={{ opacity: 0, y: 50 }}       
            whileInView={{ opacity: 1, y: 0 }}     
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.7, delay: i * 0.2 }} 
          >
            <div className="signature-image">
              <img src={dish.img} alt={dish.name} />
            </div>

            <h4 className="signature-name">{dish.name}</h4>
            <p className="signature-desc">{dish.description}</p>
            <div className="signature-price">{dish.price}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SignatureSelections;
