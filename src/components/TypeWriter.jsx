import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
      
    }
  }, [currentIndex, delay, text]);

  return  (
    <h1 className="pl-2 inline font-teachers text-[56px] md:text-[60px] lg:text-[90px] leading-none text-center md:text-left">
        <span className="text-[64px]">{currentText.split(' ')[0]}</span>
        <br></br>
        <span>{currentText.split(' ')[1]}</span>
        <span> </span>
        <span className="Mubarak">{currentText.split(' ')[2]}</span>
    </h1>
  
)
  
};

export default TypeWriter;