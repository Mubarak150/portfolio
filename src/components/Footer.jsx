import React from "react";
import Avatar from "./Avatar";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-4 font-teachers border-box py-8 text-[#c8b084] flex flex-col justify-center items-center">
      <p>Muhammad Mubarak © {currentYear}</p>
    </footer>
  );
};

export default Footer;
