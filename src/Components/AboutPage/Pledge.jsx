import React from 'react'

export default function Pledge() {
    return (
        <section className="bg-gray-200 px-4 pb-20">
            <div className="max-w-[1420px] mx-auto grid md:grid-cols-2 gap-15 items-center">

                <div className="space-y-6">
                    <h3 className="text-2xl md:text-5xl font-bold italic mb-10">Our Pledge</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We are unwavering in our commitment to quality. We source the freshest
                        local ingredients to ensure every bite is a burst of flavor.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our team of chefs, each a master in their craft, pour their expertise and
                        creativity into every dish, presenting a symphony of tastes that will leave
                        you wanting more.
                    </p>
                    <button className="cursor-pointer text-semibold border-2 border-black bg-gray-100  px-5 py-3 rounded-md hover:bg-gray-200 transition">
                        Dive Into Flavor
                    </button>
                </div>
                <img
                    src="https://restro-lake.vercel.app/static/media/ourpledge.72ec52231022d644553d.avif"
                    alt="Our Story"
                    className="w-full max-h-[320px] object-cover rounded-lg shadow"
                />
            </div>
        </section>
    )
}
