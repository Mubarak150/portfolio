import Bio from "../components/Bio";
import Media from "../components/Media";
import GoldenButton from '../components/GoldenButton';
import { useInView } from 'react-hook-inview';



export default function About () {

    const [heroRef,  heroIsVisible ] = useInView (
        { threshold: 0.1}
       );


    return (
        <div className="flex flex-col-reverse items-center justify-center md:grid md:grid-cols-5 px-4 md:px-16 pt-8 gap-8">
            <div className="col-span-3 px-2 md:px-0">
                <h2 className="text-3xl font-bold font-teachers text-primary"><span className='hidden md:inline'>Muhammad </span> Mubarak Here...</h2>
                <Bio />
                <div className="flex justify-center items-center gap-4 pt-8  py-4 pb-8 ">
                    <Media />
                </div>
            </div>

            <div className="md:col-span-2">
                <div ref={heroRef} className="relative md:pl-0  md:col-span-2  md:mt-8 ">
                    <img src="./mubarak.png"  alt="" className={`my-image ${heroIsVisible ? 'fade-up' : ''} h-[280px]   md:h-[410px] rounded-full`} />
                    <img src="./c-circle.png" alt="Circle" className={`my-circle ${heroIsVisible ? 'fade-in' : ''} h-[300px]  md:h-[440px] absolute -top-1 md:-top-2 md:-left-1 z-10`} />
                    <div className=" w-full md:w-auto text-center  mt-10 ">
                        <a href="/contact-me">
                            <GoldenButton text="say Hi!" />
                        </a>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}