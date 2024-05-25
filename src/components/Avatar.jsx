import React from "react"; 
import classNames from 'classnames';


export default function Avatar(props) {
    return(
       <div className={classNames("rounded-full w-12 md:w-14 p-1 bg-none shadow-md", props.divClass)}>
            <img src={props.src} alt={props.alt} className={classNames("h-10 md:h-12 border rounded-full", props.imgClass)} />
       </div> 
    )   
}