import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="bg-[#e6f7f3] py-16 px-6 text-center relative overflow-hidden">
      {/* --- TEXT SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mb-20"
      >
        
        <p className="text-[#e76f51] uppercase font-black tracking-[3px] mb-4 text-[22px] md:text-[26px]">
         Our Story
        </p>

        
        <h2 className="text-[#064e3b] font-extrabold leading-tight mb-6 text-[38px] md:text-[48px]">
         The Zeal Taste Adventure
         </h2>


        
         <p className="text-[#064e3b] leading-relaxed max-w-xl mx-auto text-[23px] md:text-[22px]">
          Journey with us from our inception to today as we revolutionize the way
          food is enjoyed<br/> on the go. Our passion for culinary excellence and
          commitment to quality have driven us <br/> to create a unique dining
          experience, bringing gourmet flavors right to your doorstep.
        </p>
      </motion.div>

      {/* --- IMAGE LAYOUT SECTION --- */}
      <div className="relative max-w-6xl mx-auto flex justify-center items-center mt-10">
        
        <motion.img
          src="https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e162d17ee515828c70f086_Rectangle%2033%20(1).avif"
          alt="Left"
          className="w-64 h-64 object-cover shadow-md absolute left-[20%] top-[38%] transform -translate-y-1/2 hover:shadow-xl transition-all duration-300"
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        
        <motion.img
          src="https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e162d27f2ed3582e4ae320_Rectangle%2034%20(1).avif"
          alt="Center"
          className="w-80 h-96 object-cover shadow-xl z-10 hover:shadow-2xl transition-all duration-300"
          style={{
            borderRadius: "20px",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        
        <motion.img
          src="https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e162d212c98e24c888bb76_Frame%20214.avif"
          alt="Right"
          className="w-64 h-64 object-cover shadow-md absolute right-[20%] bottom-[15%] hover:shadow-xl transition-all duration-300"
          style={{
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* YouTube Stat */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute left-[26%] top-[68%] bg-[#064e3b] w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center text-white shadow-2xl cursor-pointer z-20"
        >
          <FaYoutube className="text-6xl mb-3 text-[#e76f51]" />
          <p className="text-3xl font-bold leading-none">14K+</p>
          <span className="text-[#e76f51] font-semibold text-lg mt-2">
            Subscribe
          </span>
        </motion.div>

        {/* Instagram Stat */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute right-[26%] top-[3%] bg-[#064e3b] w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center text-white shadow-2xl cursor-pointer z-20"
        >
          <FaInstagram className="text-6xl mb-3 text-[#e76f51]" />
          <p className="text-3xl font-bold leading-none">14K+</p>
          <span className="text-[#e76f51] font-semibold text-lg mt-2">
            Follow us
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
