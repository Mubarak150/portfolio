import {useState} from 'react';
import classNames from 'classnames';


export default function CVButton(props) {
    const [buttonText, setButtonText] = useState('Download My CV');
    const [isDownloading, setIsDownloading] = useState(false); 

  const handleDownload = () => {
    // change the state i.e. text of the button.. and add a spin element. 
    setButtonText("Downloading...");
    setIsDownloading(true); 
    // Construct the URL to the file in the public directory
    const link = document.createElement('a');
    link.href = './Mubarak-CV.pdf'; // Adjust the path if your file is located in a subdirectory
    link.download = 'Mubarak-CV.pdf'; // Specify the file name for the download
    link.click();
    
    // falsly setting button while downloading. 
    setInterval(()=> {
        setButtonText("Download My CV");
        setIsDownloading(false); 
    }, 4500)
  };
  
  return (
    <>
        <button onClick={handleDownload} className={classNames("button flex items-center justify-center gap-3 backdrop-filter backdrop-blur-sm shadow-2xl font-teachers font-semibold text-primary px-10 py-2  hover:bg-primary hover:text-white  duration-200 shadow-md hover:shadow-none", props.buttonClass)} >
            {isDownloading && (<span className="animate-spin rounded-full  border border-[8px] border-primary border-b-gray-400"> </span>) } 
            <p className="">{buttonText}</p>
        </button>
    </>
  );
}
