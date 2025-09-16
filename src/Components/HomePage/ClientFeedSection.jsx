import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSlider() {
    const testimonials = [
        {
            text: "The attention to detail, the quality of ingredients, and the impeccable service truly set Opulenza Verve apart. I can't wait to return and explore more of their menu. Highly recommended!",
            author: "Henry A.",
            role: "CEO of Delightful",
            img: "https://media.istockphoto.com/id/1216027341/photo/happy-student-with-books-holding-stock-photo.jpg?s=1024x1024&w=is&k=20&c=n9H95FzuOSUfx641LY91cd0UNu7hmGCizNM6oBZBXEU="
        },
        {
            text: "Absolutely fantastic dining experience! The flavors and presentation were top-notch.The attention to detail, the quality of ingredients, and the impeccable service truly set Opulenza Verve apart. I can't wait to return and explore more of their menu.",
            author: "Sophie B.",
            role: "Food Blogger",
            img: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text: "The attention to detail, the quality of ingredients, and the impeccable service truly set Opulenza Verve apart. I can't wait to return and explore more of their menu. Wonderful ambiance and the staff were incredibly attentive. Loved every moment.",
            author: "Michael K.",
            role: "Chef",
            img: "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=1024x1024&w=is&k=20&c=-xjY_sj5IU0ibPJn3t8Qf63XyBlunViU3oeT2RwJ3RE="
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <section
            className="bg-cover bg-center text-center text-white py-10 px-4 flex flex-col gap-5 justify-center items-center"
            style={{
                backgroundImage:
                    "url('https://restro-lake.vercel.app/static/media/bg.c03a5ea7166572935666.png')",
            }}
        >
            <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 italic"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                What Client's Say
            </h2>
            <p
                className="mb-4 sm:mb-6 text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                1500+ Satisfied Clients
            </p>

            <div
                className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="100"
            >
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="px-2 sm:px-4">
                            <p className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                                {item.text}
                            </p>
                            <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                                {item.author}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
                                {item.role}
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src={item.img}
                                    alt={item.author}
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-orange-400"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    );
}
