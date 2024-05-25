import {useState, useEffect} from 'react';
import TypeWriter from "./TypeWriter";
import GoldenButton from './GoldenButton';


export default function HeroText (props) {
  const [showContent, setShowContent] = useState(false);
  setInterval(() => setShowContent(true), 4000);
  

  return (
      <div className="md:pl-16 lg:pl-32 md:py-28 flex-col justify-center inline-block min-w-1/2 text-center md:text-left">          
        <div className="flex justify-start items-end h-4/5 inline">
        <TypeWriter text="Hello! I'm Mubarak" delay={200} />
        <span className="blinking-cursor"></span>
        
        </div>

        {/*  SHOW BELOW TEXT AFTER 4 SECONDS OF PAGE LOADING... */}
        {showContent && (
          <>
            <p className="md:text-2xl text-primary rajdhani mt-4 pl-4 text-after-hero font-semibold inline  w-full">
              A MERN stack Developer
            </p>
            <div className="text-after-hero-2 mt-4 md:pl-4 ">
              <a href="/contact-me">
                <GoldenButton text="Contact Me" />
              </a>
            </div>
          </>
        )} 
      </div>
  );
}
