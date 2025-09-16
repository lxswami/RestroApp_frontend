import React from 'react'

export default function CulinarySection() {
    return (
        <section className="bg-gray-200 py-12 px-4">
            <div className="max-w-[1420px] mx-auto grid md:grid-cols-2 gap-15 items-center">
                <img
                    src="https://restro-lake.vercel.app/static/media/a_culinary_fest.1dd5d7d5e50690b7e04f.webp"
                    alt="Our Story"
                    className="w-full max-h-[340px] object-cover rounded-lg shadow"
                />
                <div className="space-y-4">
                    <h3 className="text-2xl md:text-5xl italic font-bold">A Culinary Feast</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Join us on a culinary odyssey where every dish is a work of art, crafted with passion and authenticity. From the aromatic spices
                        of North India to the vibrant flavors of South India, and the finesse of Italian cuisine, every plate tells a tale.
                        <br /> <br />
                        Our culinary artists take inspiration from their heritage, infusing each creation with tradition and innovation.
                        <br /> <br />
                        From the aromatic spices of North India to the vibrant flavors of South India, and the finesse of Italian cuisine, every plate tells a tale.
                    </p>
                    <button className="border-2 cursor-pointer text-semibold border-black bg-gray-100  px-5 py-3 rounded-md hover:bg-gray-200 transition">
                        Explore The Delights
                    </button>

                </div>
            </div>
        </section>
    )
}
