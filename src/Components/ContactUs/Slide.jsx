import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=987&q=80",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full max-w-5xl mx-auto border rounded-lg overflow-hidden p-4 md:p-8">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <img
              src={slide.image}
              alt="Dining Table"
              className="w-full mb-4 md:mb-6 max-h-60 md:max-h-80 object-cover"
            />
          </div>
        ))}
      </Slider>
      {/* Static text below slider */}
      <div className="py-2 md:py-4 border-t text-white">
        <p className="italic font-semibold text-lg md:text-xl lg:text-2xl text-start">
          "Immerse yourself in the grandeur of Indian gastronomy and savor a dining experience that mirrors the richness of our heritage."
        </p>
      </div>
    </div>
  );
}
