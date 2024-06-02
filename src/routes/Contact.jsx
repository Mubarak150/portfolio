
import Footer from "../components/Footer";
import Media from "../components/Media";
import ContactForm from "../components/ContactForm";

export default function Contact() {

    return (
        <>
        <div className="md:grid md:grid-cols-2 w-screen gap-6 md:gap-8 md:my-10 p-2 px-4 md:p-6">
            {/* Text Section  */}
            <div className="w-full text-left flex flex-col justify-start  font-teachers text-primary py-4 md:py-0 lg:pt-8">
                <h2 className="text-2xl font-bold text-center md:text-left">Let's Create Something Amazing Together!</h2>
                <p className="mt-4 text-justify text-md">
                &nbsp;&nbsp;&nbsp;&nbsp;Thank you for visiting my portfolio. I'm a passionate MERN stack developer with a knack for crafting dynamic, responsive, and user-friendly web applications. Whether you have a project in mind, a question, or just want to say hi, I'd love to hear from you. Fill out the form, and let's start a conversation that could lead to your next big idea coming to life. Your vision, combined with my expertise, can result in exceptional digital experiences. Don't hesitate – reach out today and let's make it happen!
                </p>
                <div className="">
                    <div className="gap-4 p-2 lg:pt-6 hidden md:flex">
                        <Media />
                    </div> 
                </div>    
            </div>

            {/* form */}
            <ContactForm />

            <div className="flex justify-center items-center gap-4 p-2 pt-8 lg:pt-8  py-4 pb-8 md:p-0 md:hidden">
                <Media />
            </div> 
        
        </div>
    <Footer />
    </>
    );
}
