import React from 'react'

export default function OurStorySection() {
    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-[1420px] mx-auto grid md:grid-cols-2 gap-15 items-center">

                <div className="space-y-4">
                    <h3 className="text-2xl md:text-5xl font-bold italic">Our Story</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Opulenza Verve's journey began with a vision - to create a dining experience that blends the best of North Indian,
                        South Indian, and Italian cuisines.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our story unfolds on the vibrant streets of Noida, where we embarked on a gastronomic adventure
                        to curate a menu that celebrates diversity and exquisite tastes.
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80"
                    alt="Our Story"
                    className="w-full max-h-[350px] object-cover rounded-lg shadow"
                />
            </div>
        </section>
    )
}
