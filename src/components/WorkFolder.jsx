import { useInView } from 'react-hook-inview'
import CVButton from "./CVButton";
import Work, {works} from "./Work"; 
export default function WorkFolder (props) {
    const [workRef,  workIsVisible ] = useInView ();
    return (
        <div ref={workRef} className={`animate ${workIsVisible ? 'appear' : ''} w-full md:w-[32vw] flex flex-col shadow-lg md:p-4 md:m-3 md:mt-0 h-auto lg:h-[350px]`}>
            <div className="flex gap-4 px-4 items-center justify-center">
                <img src="./work.svg" alt="work-svg" className="" />
                <h2 className="font-teachers font-semibold text-gray-800 text-lg">Work</h2>
            </div>
            { works.slice().reverse().map((work, index) => (
            <Work key={index} src={work.src} company={work.companyName} role={work.role} from={work.from} to={work.to} />
            ))}

            <div className="w-full pt-3">
                <CVButton  buttonClass="w-full mx-1 "/>
            </div>
        </div>
    )
};