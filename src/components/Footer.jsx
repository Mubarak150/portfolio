import React from "react";
import Avatar from "./Avatar";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-4 text-wheat font-teachers border-box py-8 bg-primary text-white flex flex-col justify-center items-center">
      <p>Muhammad Mubarak © {currentYear}</p>
    </footer>
  );
};

export default Footer;
