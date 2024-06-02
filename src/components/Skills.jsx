import React from "react";

export default function Work (props) {
    return (
        <div className="flex items-center justify-center  text-white bg-primary font-teachers px-2 py-1">
            <p className="">{props.skill}</p>
        </div>
    )
}


const skills = {
    frontend: [
        'HTML', 'CSS', 'Tailwind', 'BootStrap', 'JavaScript', 'JQuery', 'React.js'
    ],
    backend: [
        'Node.js', 'Express.js'
    ],
    databases: [
        'MySQL', 'MongoDB'
    ]
}; 
export {skills};