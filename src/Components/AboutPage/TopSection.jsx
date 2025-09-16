
import React from "react";

const TopSection = () => {
    return (

        <section
            className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-white px-4 text-center capitalize">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 italic">
                    About Us
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                    Welcome to Opulenza Verve, where flavors come to life. Located in the bustling city of Noida,
                    we're excited to introduce you to our unique culinary heaven, offering a fusion of North Indian,
                    South Indian, and Italian cuisine.</p>
            </div>
        </section>
    );
};

export default TopSection;
