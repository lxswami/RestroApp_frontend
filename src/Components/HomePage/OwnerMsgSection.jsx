import React from "react";

export default function OwnerMessage() {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
            {/* Left text */}
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <p className="uppercase text-sm font-semibold mb-2">Message</p>
                <h2 className="text-3xl font-serif font-bold italic mb-4">From Our Owner</h2>
                <p className="text-gray-700 mb-6">
                    We invite you to explore the opulent blend of North Indian, South Indian,
                    and Italian cuisine that Opulenza Verve offers. Whether you seek the comfort
                    of familiar flavors or the excitement of culinary exploration, we welcome you
                    to be a part of this extraordinary gastronomic journey. Indulge in opulence.
                    Savor the verve.
                </p>
                <div>
                    <p className="font-semibold">Name</p>
                    <p className="text-sm text-gray-600">Owner</p>
                </div>
            </div>

            {/* Right image */}
            <div className="flex justify-center md:justify-end" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img
                    src="https://restro-lake.vercel.app/static/media/owner.04b6b2c6fa7de7c17a2c.jpg"
                    alt="Owner"
                    className="rounded-md max-w-full object-cover"
                />
            </div>
        </section>
    );
}
