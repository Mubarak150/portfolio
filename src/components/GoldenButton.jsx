import React from 'react';
import classNames from 'classnames';


export default function Button(props) {

  return (
    <a  href='mailto:mkmubarak2347@gmail.com'>
      <button className={classNames("button backdrop-filter backdrop-blur-sm font-teachers font-semibold text-primary px-10 py-2  hover:bg-primary hover:text-white  duration-200 shadow-md hover:shadow-none  w-4/5 md:w-auto", props.buttonClass)} ><p className="">{props.text}</p></button>
    </a>
  );
}

