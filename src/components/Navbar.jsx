import React from "react";
import "./Navbar.css"; // 
import logo from "../assets/img3.png";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="bg-[#fdece6] flex justify-between items-center px-8 py-3 shadow-md
                 opacity-0 animate-fadeDown delay-200"
    >
      {/* Left side - Logo and Brand Name */}
      <div className="flex items-center gap-3 pl-[8cm]">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
          className="rounded-full transition-transform duration-500 hover:scale-110"
        />
        <h1 className="text-xl font-bold text-[#e76f51] transition-transform duration-500 hover:scale-110">
          Zeal Taste
        </h1>
      </div>

      {/* Right side - Email */}
      <a
        href="mailto:info@zealtaste.com"
        className="flex items-center gap-2 text-xl font-bold text-[#e76f51] hover:text-[#ff4500] transition-all duration-500 hover:scale-110 mr-[8cm]"
      >
        <Mail size={24} />
        info@zealtaste.com
      </a>
    </nav>
  );
};

export default Navbar;
