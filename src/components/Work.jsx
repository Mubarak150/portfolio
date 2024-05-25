import React from "react";
import Avatar from "./Avatar";

export default function Work (props) {
    return (
        <div className="flex flex-col md:flex-row block gap-4  shadow-lg inline-block items-center justify-center md:justify-start p-2 m-1 w-full">
            <Avatar src = {props.src}  />
            <div className="flex flex-col  inline-block pt-2">
                <h4 className="inline-block text-center md:text-left font-teachers font-semibold text-gray-900">{props.company}</h4>
                <div className="flex flex-col md:flex-row  inline-block ">
                    <p className="inline-block text-center text-gray-600">{props.role}</p>
                    <p className="inline-block text-center md:ml-4 text-gray-500 text-[14px]">{props.from}</p>
                    <p className="hidden md:inline-block px-1 text-gray-500 text-[14px]"> — </p>
                    <p className="inline-block text-center text-gray-500 text-[14px]">{props.to}</p>
                </div>
            </div>
        </div>
    )
}


const works = [
    {
        src: "./src/assets/artisan_logo.jpeg",
        companyName: "Artisan (Pvt.) Ltd. ",
        role: "Front End Intern",
        from: "Sep 2023",
        to: "Dec 2023"
    },
    {
        src: "./src/assets/culyte_pvt_ltd_logo.jpeg",
        companyName: "Culyte (Pvt.) Ltd. ",
        role: "MERN stake Intern",
        from: "Mar 2024",
        to: "April 2024"
    },
    {
        src: "./src/assets/culyte_pvt_ltd_logo.jpeg",
        companyName: "Culyte (Pvt.) Ltd. ",
        role: "Jr. MERN Stake dev.",
        from: "Apr 2024",
        to: "Present"
    }
]; 
export {works};