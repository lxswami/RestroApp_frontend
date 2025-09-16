import React, { useState } from "react";
import RecipeCardsSection from "../Components/MenuPage/RecipeCardsSection";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("All");

  // Show all tabs for everyone
  const tabs = [
    "All",
    "Indian Cuisine",
    "North Indian Cuisine",
    "South Indian Cuisine",
    "Italian Cuisine",
  ];

  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-[480px] flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "url('https://restro-lake.vercel.app/static/media/bg5.4415973cd4bdf20f31fc.jpg')",
        }}
      >
        <div className="relative z-10 w-full mt-50">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Menu
          </h2>
          <p className="text-white text-lg md:text-[18px] font-semibold">
            Explore Our Delicious Favorites
          </p>
          <p className="text-white text-lg md:text-[18px] font-semibold mt-1">
            Click Tabs For Tantalizing Options
          </p>

          <div className="relative mt-40 mb-10 mx-5 bg-black bg-opacity-70 py-4 flex justify-center items-center">
            <div className="w-full max-w-7xl gap-4 md:gap-20 flex justify-center items-center flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative py-2 px-3 text-white font-semibold text-base md:text-lg lg:text-xl cursor-pointer
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-400
                    ${activeTab === tab ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RecipeCardsSection activeTab={activeTab} />
    </>
  );
}
