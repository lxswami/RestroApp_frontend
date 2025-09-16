import React from "react";
import Slide from "../Components/ContactUs/Slide";
import ContactForm from "../Components/ContactUs/ContactForm";

export default function Contact() {
    return (
        <section
            className="flex flex-col w-full items-center gap-6 p-4 bg-black text-white bg-cover py-[7rem]"
            style={{ backgroundImage: "url('https://restro-lake.vercel.app/static/media/contact.239a391058a138964f57.jpg')" }}
        >

            {/* Heading at the top */}
            <h1 className="text-center max-w-6xl text-base sm:text-lg md:text-[25px] font-medium mb-4 italic px-2">
                "We're here to assist you. Send us a message, and we'll be in touch shortly.
                Your questions and feedback are important to us."
            </h1>

            {/* Content below heading */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-6xl w-full">
                <Slide />
                <ContactForm />

            </div>
        </section>
    );
}
