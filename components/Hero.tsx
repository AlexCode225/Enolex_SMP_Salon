"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeroGetstarted } from "@/constants"; 

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HeroGetstarted.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const { image } = HeroGetstarted[currentSlide];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center transition-all duration-1000 ease-in-out animate-[zoom_7s_infinite]"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 sm:px-12">
      <h1  className="text-white text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight drop-shadow-lg animate-slideDown">
  Bienvenue chez Enolex SMP  #Côte d'Ivoire
</h1>

<h2 className="text-gray-400 text-xxl sm:text-3xl md:text-4xl font-montserrat  drop-shadow-lg mt-5 animate-slideDown" style={{ animationDelay: "0.5s" }}>
  vous redonner confiance avec des services de qualité
</h2>

        <div
          id="Panel1"
          className="mt-14 flex flex-col sm:flex-row sm:justify-center sm:space-x-10 space-y-6 sm:space-y-0"
        >
          <Link
            href="/Quote"
            className=" inline-block duration-500 bg-pink-500 hover:bg-pink-700 text-white text-2xl sm:text-3xl px-12 py-6 rounded-4xl shadow-xl transition text-center "
          >
        Commence Ton Aventure
          </Link>

          <Link
            href="/Services"
            className="inline-block  border-2 bg-transparent hover:bg-pink-400 text-white text-2xl sm:text-3xl px-12 py-6 rounded-4xl shadow-xl transition text-center"
          >
            Nos Services
          </Link>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 flex space-x-2 justify-center w-full z-20">
        {HeroGetstarted.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-pink-400" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
