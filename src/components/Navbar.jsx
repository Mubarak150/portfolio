import { useState } from 'react';
import { useInView } from 'react-hook-inview'
import classNames from 'classnames';
import GoldenButton from "./GoldenButton";
import GreenText from "./GreenText"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import Avatar from './Avatar';




function Navbar () {
const [navbarRef,  navbarIsVisible ] = useInView ();

const [isHidden, setIsHidden] = useState(true);
function handleToggle () {
    if(isHidden) {
        setIsHidden(false)
    } else {
        setIsHidden(true)
    }
}

return (
    
  
    <nav ref={navbarRef} className={`animate ${navbarIsVisible ? 'appear' : ''} relative w-full flex items-center pt-3 pb-12 md:py-5 px-4 md:px-8 nav-items backdrop-blur-sm`}>

        {/* OWNER IMAGE CIRCULAR */}
        <Avatar src="./mubarak.png" divClass=" hover:scale-125 duration-200" imgClass="hover:scale-125 duration-200" />

        {/* NAVBAR LINKS for laptop */}
        <div className="p-0 m-0 nav-container inline-block flex justify-start align-self-end w-auto flex-grow h-full ">
            <div className="pl-12">
                <a href="" className="hidden md:inline text-[20px] text-primary hover:scale-125 hover:font-semibold p-1 mx-6 font-teachers transition-all duration-2000 duration-200">Home</a>
                <a href="" className="hidden md:inline text-[20px] text-primary hover:font-semibold p-1 mx-6 font-teachers transition-all duration-2000">Portfolio</a>
                <a href="" className="hidden md:inline text-[20px] text-primary hover:font-semibold p-1 mx-6 font-teachers transition-all duration-2000">Contact</a>
               
            
            </div> 
        </div>

        {/* navbar burger and links for mobile */}

        <div onClick={handleToggle} className="md:hidden m-0 p-0">
            <svg className=" h-12" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#47484b"></path> </g></svg>
        </div>

        <div className={` ${isHidden ? 'opacity-0 transform -translate-y-10' : 'opacity-100 transform translate-y-0'}  transition-all duration-700 absolute w-full top-20 left-1 flex justify-center items-center w-screen`}>
    

                <a href="" className="block md:hidden px-3 border border-primary text-[14px] text-primary hover:bg-primary hover:text-white p-1 mx-1 font-teachers transition-all duration-2000 ">Home</a>
                <a href="" className="block md:hidden px-3 border border-primary text-[14px] text-primary hover:bg-primary hover:text-white p-1 mx-1 font-teachers transition-all duration-2000">Portfolio</a>
                <a href="" className="block md:hidden px-3 border border-primary text-[14px] text-primary hover:bg-primary hover:text-white p-1 mx-1 font-teachers transition-all duration-2000">Contact</a>           
        </div>
        {/* link to my github account */}
        <div className="hidden md:inline flex  justify-center align-center mr-10 hover:scale-125 duration-200">
            <a href="https://github.com/Mubarak150">
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"  fill="text-primary"></path>
                </svg>
            </a>
        </div>

        {/* contact me page link */}
        <div>
            <a href="/contact-me" className="hidden md:inline">
                <GoldenButton text="Contact Me"  buttonClass="hover:scale-105" /> 
            </a>
        </div>
        
        
    </nav>
 
);

} 


export default Navbar; 