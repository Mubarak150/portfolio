import React from 'react';
import HeroText from './HeroText';
import Navbar from './Navbar';
import TypingAnimation from './TypingAnimation';


export default function HeroSection(props) {
  return (
    <div className="h-screen inline-block">
    <TypingAnimation />
    </div>
  );
}
