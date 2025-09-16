import React from "react";

export default function ExperienceTextSection() {
    return (
        <section
            className="relative bg-cover bg-center flex items-center justify-center text-center min-h-[400px] md:min-h-[500px] px-4"
            style={{
                backgroundImage:
                    "url('https://restro-lake.vercel.app/static/media/exp-bg_trial1.33467d6c06dba1427137.webp')",
            }}
        >
            {/* Overlay for darker effect */}
            <div className="absolute inset-0 bg-black opacity-[25%]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl text-white">
                <h2 className="text-3xl md:text-5xl font-bold italic mb-10 ">
                    The Opulenza Experience
                </h2>
                <p className="text-base md:text-[22px] leading-relaxed">
                    At Opulenza Verve, dining is an elevated experience. Our refined
                    ambiance, gracious hospitality, and a menu designed to tantalize your
                    taste buds create an atmosphere where you can cherish unforgettable
                    moments with friends and family.
                </p>
            </div>
        </section>
    );
}
