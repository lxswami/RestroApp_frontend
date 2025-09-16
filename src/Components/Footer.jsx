import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            className="text-white py-12 px-6"
            style={{
                backgroundImage:
                    "url('https://restro-lake.vercel.app/static/media/bg.ff143aaab7ffdb8fa063.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Top input box */}
            <div
                style={{
                    backgroundImage:
                        "url('https://restro-lake.vercel.app/static/media/bg.51b1e69cded5efe1b202.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="py-10 px-6 max-w-6xl mx-auto rounded-2xl shadow-lg flex flex-col items-center"
            >
                {/* Heading & subheading */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold italic mb-2 text-white">
                        We Value Your Input And Believe
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        That Great Ideas Can Come From Anywhere.
                    </p>
                </div>

                {/* Input box with button */}
                <div className="w-full sm:w-[70%] md:w-[60%] flex">
                    <input
                        type="text"
                        placeholder="Your Message"
                        className="flex-1 px-4 py-3 rounded-l-lg bg-black/40 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    />
                    <button className="px-6 py-3 bg-white text-black rounded-r-lg hover:bg-gray-200 transition font-medium">
                        Send
                    </button>
                </div>
            </div>

            {/* Bottom columns */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 text-center md:text-left">
                {/* Contact Location */}
                <div>
                    <h3 className="font-semibold text-lg mb-3 border-b border-gray-600 inline-block pb-1">
                        Contact Location
                    </h3>
                    <p className="text-gray-300 mb-2">Malpura Road, Dudu(Jaipur)</p>
                    <p className="text-gray-300 mb-2">
                        Email:{" "}
                        <a
                            href="mailto:99294799lx@gmail.com"
                            className="hover:text-white underline"
                        >
                            99294799lx@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-300">
                        Phone:{" "}
                        <a
                            href="tel:1234567890"
                            className="hover:text-white underline"
                        >
                            (+91) 9929479949
                        </a>
                    </p>

                    <div className="flex justify-center md:justify-start gap-5 mt-4">
                        {/* Instagram */}
                        <Link
                            to="#"
                            onClick={() =>
                                window.open("https://www.instagram.com/lx_guru.00", "_blank")
                            }
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-pink-500 hover:text-white transition duration-300"
                        >
                            <FaInstagram className="text-xl" />
                        </Link>

                        {/* Facebook */}
                        <Link
                            to="#"
                            onClick={() =>
                                window.open("https://www.facebook.com/yourprofile", "_blank")
                            }
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                            <FaFacebookF className="text-xl" />
                        </Link>

                        {/* WhatsApp */}
                        <Link
                            to="#"
                            onClick={() =>
                                window.open("https://www.whatsapp.com/yourprofile", "_blank")
                            }
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-500 hover:text-white transition duration-300"
                        >
                            <FaWhatsapp className="text-xl" />
                        </Link>
                    </div>

                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="font-semibold text-lg mb-3 border-b border-gray-600 inline-block pb-1">
                        Working Hours
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        Monday - Sunday <br /> 09:00 AM - 11:00 PM
                    </p>
                </div>

                {/* Connect With Us */}
                <div>
                    <h3 className="font-semibold text-lg mb-3 border-b border-gray-600 inline-block pb-1">
                        Connect With Us
                    </h3>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                        Follow Us And Get Into <br /> The World Of Food.
                    </p>
                </div>
            </div>

            {/* Bottom small footer line */}
            <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Restro Lake. All rights reserved.
            </div>
        </footer>
    );
}
