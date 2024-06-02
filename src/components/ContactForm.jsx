import React, { useEffect, useRef, useState } from "react";

export default function ContactForm () {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., show a success message)
                console.log('Message sent successfully');
            } else {
                // Handle error (e.g., show an error message)
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    ///////////////////////////////////////////////
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const firstNameLabelRef = useRef(null);
    const lastNameLabelRef = useRef(null);
    const subjectLabelRef = useRef(null);
    const messageLabelRef = useRef(null);

    useEffect(() => {
        const handleFocus = (inputRef, labelRef) => {
            if (labelRef.current) {
                labelRef.current.style.top = '-7px';
                labelRef.current.style.fontSize = '12px';
                labelRef.current.style.color = '#333';
                labelRef.current.style.backgroundColor = 'white';
                labelRef.current.style.padding = '0px 4px';
            }
        };

        const handleBlur = (inputRef, labelRef) => {
            if (labelRef.current && inputRef.current && !inputRef.current.value.trim()) {
                labelRef.current.style.top = '10px';
                labelRef.current.style.fontSize = '';
                labelRef.current.style.color = '';
                labelRef.current.style.backgroundColor = '';
                labelRef.current.style.padding = '';
            }
        };

        const checkInitialValue = (inputRef, labelRef) => {
            if (inputRef.current && inputRef.current.value.trim()) {
                handleFocus(inputRef, labelRef);
            }
        };

        const inputs = [
            { inputRef: firstNameRef, labelRef: firstNameLabelRef },
            { inputRef: lastNameRef, labelRef: lastNameLabelRef },
            { inputRef: subjectRef, labelRef: subjectLabelRef },
            { inputRef: messageRef, labelRef: messageLabelRef },
        ];

        inputs.forEach(({ inputRef, labelRef }) => {
            checkInitialValue(inputRef, labelRef);
            if (inputRef.current && labelRef.current) {
                inputRef.current.addEventListener('focus', () => handleFocus(inputRef, labelRef));
                inputRef.current.addEventListener('blur', () => handleBlur(inputRef, labelRef));
            }
        });

        return () => {
            inputs.forEach(({ inputRef, labelRef }) => {
                if (inputRef.current && labelRef.current) {
                    inputRef.current.removeEventListener('focus', () => handleFocus(inputRef, labelRef));
                    inputRef.current.removeEventListener('blur', () => handleBlur(inputRef, labelRef));
                }
            });
        };
    }, []);

    return (
        <div  onSubmit={handleSubmit} className="w-full py-4 md:py-0" >
            <div action="" method="POST" className="grid grid-cols-2 gap-2">
                <div className="form w-full relative">
                    <input className="w-full" type="text" id="firstName" value={formData.firstName} onChange={handleChange} ref={firstNameRef} />
                    <label htmlFor="firstName" ref={firstNameLabelRef} className="label">First Name</label>
                </div>

                <div className="form w-full relative">
                    <input className="w-full" type="text" id="lastName" value={formData.lastName} onChange={handleChange} ref={lastNameRef} />
                    <label htmlFor="lastName" ref={lastNameLabelRef} className="label">Last Name</label>
                </div>

                <div className="form col-span-2 w-full relative">
                    <input className="w-full" type="text" id="subject" value={formData.subject} onChange={handleChange} ref={subjectRef} />
                    <label htmlFor="subject" ref={subjectLabelRef} className="label">Subject</label>
                </div>

                <div className="form col-span-2 w-full relative">
                    <textarea rows="6" className="w-full" id="message" value={formData.message} onChange={handleChange} ref={messageRef}></textarea>
                    <label htmlFor="message" ref={messageLabelRef} className="label">Your Message...</label>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <button text='submit' className=' inline button backdrop-filter backdrop-blur-sm font-teachers font-semibold text-primary px-10 py-2  hover:bg-primary hover:text-white  duration-200 shadow-md hover:shadow-none  w-full md:w-1/2'>submit</button>
                </div>
            </div>
        </div>
    )
}