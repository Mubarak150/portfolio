import { useInView } from 'react-hook-inview'
import Skills, {skills} from "./Skills"; 
export default function WorkFolder () {
    const [workRef,  workIsVisible ] = useInView ();
    return (
        <div ref={workRef} className={`animate ${workIsVisible ? 'appear' : ''} w-full md:w-[32vw] flex flex-col shadow-lg md:p-4 md:m-3 md:mt-0 h-auto `}>
            <div className="flex gap-4 px-4 items-center justify-center">
                <img src="./tools.svg" alt="skills-svg" className="" />
                <h2 className="font-teachers font-semibold text-gray-800 text-lg">Skills</h2>
            </div>
            <div className="flex flex-col p-3">
                <h3 className="py-1 text-md font-teachers font-thin">Front End</h3>
                <div className="flex flex-wrap gap-2">
                   { skills.frontend.map((skill, index) => (
                        <Skills key={index} skill={skill} />
                    ))} 
                </div>
            </div>

            <div className="flex flex-col p-3">
                <h3 className="py-1 text-md font-teachers font-thin">Back End</h3>
                <div className="flex flex-wrap gap-2">
                   { skills.backend.map((skill, index) => (
                        <Skills key={index} skill={skill} />
                    ))} 
                </div>
            </div>

            <div className="flex flex-col p-3">
                <h3 className="py-1 text-md font-teachers font-thin">Data Bases</h3>
                <div className="flex flex-wrap gap-2">
                   { skills.databases.map((skill, index) => (
                        <Skills key={index} skill={skill} />
                    ))} 
                </div>
            </div>
            

            
        </div>
    )
};