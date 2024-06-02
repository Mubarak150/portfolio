import React from 'react';
import { useInView } from 'react-hook-inview'
import HeroText from '../components/HeroText'
import WorkFolder from '../components/WorkFolder'
import SkillsContainer from '../components/SkillsContainer'
import Container from '../components/Container';
import Footer from '../components/Footer';
import ProjectsContainer from '../components/ProjectsContainer';


function Home() {

  const [heroRef,  heroIsVisible ] = useInView (
   { threshold: 0.1}
  );
  

 //bg-[url('./assets/hero-image-2.jpg')]

 const handleScroll = (event) => {
  console.log('User scrolled:', event.target.scrollTop);
};
 

  return (
    <div onScroll={handleScroll} className=" bg-cover bg-center h-screen">
      
      <Container containerClass="flex place-items-center md:place-items-start   flex-col-reverse md:grid  md:grid-rows-1 md:grid-cols-5  ">
        <div className="h-auto mt-20  md:h-screen  md:col-span-3">
          <HeroText />
        </div>
        
        <div ref={heroRef} className="relative md:pl-0  md:col-span-2  md:mt-8 ">
          <img src="./mubarak.png"  alt="" className={`my-image ${heroIsVisible ? 'fade-up' : ''} h-[280px]   md:h-[410px] rounded-full`} />
          <img src="./c-circle.png" alt="Circle" className={`my-circle ${heroIsVisible ? 'fade-in' : ''} h-[300px]  md:h-[440px] absolute -top-1 md:-top-2 md:-left-1 z-10`} />
        </div>
      </Container>
      
      <Container containerClass="border-box flex flex-col lg:flex-row justify-center w-full lg:w-auto lg:justify-end px-4 md:px-16">
        <ProjectsContainer />
        <div className="flex flex-col">
          <SkillsContainer />
          <WorkFolder />
        </div>
        
      </Container>
      <Footer />
      
    </div>
  )
}

export default Home;