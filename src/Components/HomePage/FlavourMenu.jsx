import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
    {
        id: 1,
        name: "Samosa",
        price: "₹49",
        desc: "Crispy pastry filled with spiced potatoes.",
        img: "https://restro-lake.vercel.app/static/media/1.ee822af2bf3e952d5104.jpg",
    },
    {
        id: 2,
        name: "Butter Chicken",
        price: "₹99",
        desc: "Tender chicken cooked in creamy tomato sauce.",
        img: "https://restro-lake.vercel.app/static/media/2.3c3ef36da020f04411e0.jpg",
    },
    {
        id: 3,
        name: "Dosa",
        price: "₹249",
        desc: "A thin, crispy crepe made from rice batter.",
        img: "https://restro-lake.vercel.app/static/media/3.f35eaf80c8af1a40860f.jpg",
    },
    {
        id: 4,
        name: "Margherita Pizza",
        price: "₹199",
        desc: "Classic pizza with tomatoes, cheese, and basil.",
        img: "https://restro-lake.vercel.app/static/media/4.5ee8a0362021c73901ad.jpg",
    },
];

export default function FlavourMenu() {
        const Navigate = useNavigate();
    return (
        <div className="relative">
            {/* Hero background section */}
            <section
                className="relative flex flex-col items-center justify-center text-center text-white h-[580px]"
                style={{
                    backgroundImage:
                        "url('https://restro-lake.vercel.app/static/media/bg.c03a5ea7166572935666.png')",
                    backgroundSize: "cover",
                }}
            >
                <div className="bg-black/40 p-4 rounded mb-[150px]" data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="2500">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
                        Delicious Flavour Of Opulenza
                    </h2>
                    <p className="text-gray-200 mb-4">View All Menu For Tasty Meal Today</p>
                </div>
            </section>

            {/* Cards section overlaps hero section */}
            <section className="max-w-screen-xl mx-auto px-4 py-10 -mt-[320px] relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded h-[500px] overflow-hidden shadow-lg hover:scale-105 transition"
                            data-aos="fade-up" data-aos-easing="linear"
                            data-aos-duration="2500"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-[250px] object-cover"
                            />
                            <div className="p-4 h-[250px] flex flex-col bg-gray-600 justify-center items-center gap-5">
                                <h3 className="text-[22px] font-bold text-black mb-1">{item.name}</h3>
                                <p className="text-[40px] text-white font-bold mb-1">{item.price}</p>
                                <p className="text-lg text-white text-center">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button centered below cards */}
                <div className="flex justify-center">
                    <button onClick={() => Navigate("/menu")} className="border-2 mt-[50px] bg-gray-100 hover:bg-gray-200 transition duration-200 rounded-lg p-3 cursor-pointer">
                        View Complete Menu
                    </button>
                </div>
            </section>
        </div>
    );
}




