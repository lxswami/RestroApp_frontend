import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className=" text-white py-10 px-4 h-[600px]"
            style={{
                backgroundImage:
                    "url('https://restro-lake.vercel.app/static/media/bg.ff143aaab7ffdb8fa063.png')",
                backgroundSize: "cover",
            }}
        >
            {/* Top input box */}
            <div
                style={{
                    backgroundImage: "url('https://restro-lake.vercel.app/static/media/bg.51b1e69cded5efe1b202.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="py-10 px-4 flex max-w-7xl mx-auto mt-10 justify-center"
            >
                <div className="max-w-4xl w-full p-6 relative flex">
                    {/* Heading & subheading */}
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-semibold italic mb-1 text-white">
                            We Value Your Input And Believe
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            That Great Ideas Can Come From Anywhere.
                        </p>
                    </div>

                    {/* Input box with button */}
                    <div className="mx-auto">
                        <input
                            type="text"
                            placeholder="Your Message"
                            className="flex-1 px-3 py-2  rounded-l-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button className="px-4 py-2 cursor-pointer bg-white text-black rounded-r-md hover:bg-gray-200 transition">
                            Send
                        </button>
                    </div>
                </div>
            </div>


            {/* Bottom columns */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Contact Location */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Contact Location</h3>
                    <p className="text-gray-400 mb-2">Malpura Road, Dudu(Jaipur)</p>
                    <p className="text-gray-400 mb-2">Email: <a href="mailto:99294799lx@gmail.com">99294799lx@gmail.com</a></p>
                    <p className="text-gray-400">Phone: <a href="tel:1234567890">(+91) 9929479949</a></p>
                    <div className="flex justify-center md:justify-start gap-4 mt-3">
                        <Link
                            to="#"
                            onClick={() =>
                                window.open("https://www.instagram.com/lx_guru.00", "_blank")
                            }
                        >
                            <FaInstagram className="text-2xl hover:text-gray-300 cursor-pointer" />
                        </Link>

                        <Link
                            to="#"
                            onClick={() =>
                                window.open("https://www.facebook.com/yourprofile", "_blank")
                            }
                        >
                            <FaFacebookF className="text-2xl hover:text-gray-300 cursor-pointer" />
                        </Link>

                        <Link
                            to="#"
                            onClick={() =>
                                window.open("https://www.whatsapp.com/yourprofile", "_blank")
                            }
                        >
                            <FaWhatsapp className="text-2xl hover:text-gray-300 cursor-pointer" />
                        </Link>
                    </div>

                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                    <p className="text-gray-400">Monday - Sunday : 08:00 AM - 11:00 PM</p>
                </div>

                {/* Connect With Us */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Connect With Us</h3>
                    <p className="text-gray-400 mt-2">Follow Us And Get Into<br />The World Of Food.</p>
                </div>
            </div>
        </footer>
    );
}
