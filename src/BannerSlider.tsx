import React, { useState, useEffect } from "react";
import banner1 from '@/assets/banner1.webp';
import banner2 from '@/assets/banner2.webp';
import banner3 from '@/assets/banner1.webp';

const images = [
  banner1,
  banner2,
  banner3, // Add more images as needed
];

const BannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden">
      {images.map((image, index) => (
        <img
        key={index}
        src={image}
        alt={`Banner ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
      
      ))}
    </div>
  );
};

export default BannerSlider;
