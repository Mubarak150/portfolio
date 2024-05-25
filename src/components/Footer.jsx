import React from "react";
import Avatar from "./Avatar";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-4 text-wheat text-xs font-teachers border-box py-4 bg-primary text-white flex justify-center items-center">
      <p>Muhammad Mubarak © {currentYear}</p>
    </footer>
  );
};

export default Footer;
