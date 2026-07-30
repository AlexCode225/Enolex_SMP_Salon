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
      {/* Overlay  */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenu  */}
      <div className="relative z-10 max-w-6xl px-6 sm:px-12">
  <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
    Bienvenue chez Enolex SMP
  </h1>

  <p className="text-white text-lg sm:text-2xl md:text-3xl mt-8 leading-relaxed drop-shadow-md">
    La <strong>Micropigmentation Capillaire (PMC) ou SMP (anglais)</strong> est une
    technique innovante qui recrée l’illusion de follicules pileux sur le
    cuir chevelu grâce à des pigments déposés avec précision. Elle offre
    une solution immédiate pour redonner densité, corriger les zones
    clairsemées et restaurer une ligne capillaire naturelle. Chez{" "}
    <strong>Enolex Beauty Store</strong>, nous transformons la confiance
    en soi par un savoir-faire artistique alliant rigueur et sens du
    détail.
  </p>

  <div
    id="Panel1"
    className="mt-12 flex flex-col sm:flex-row sm:justify-center sm:space-x-10 space-y-6 sm:space-y-0"
  >
    <Link
      href="/Services"
      className="inline-block bg-black hover:bg-pink-400 text-white text-xl sm:text-2xl px-10 py-5 rounded-lg shadow-xl transition text-center"
    >
      Réservez maintenant
    </Link>

    <Link
      href="/Services"
      className="inline-block bg-black hover:bg-pink-400 text-white text-xl sm:text-2xl px-10 py-5 rounded-lg shadow-xl transition text-center"
    >
      Nos Services
    </Link>
  </div>

      </div>

      {/* Indicators for images sliding  */}
      <div className="absolute bottom-6 flex space-x-2 justify-center w-full z-20">
        {HeroGetstarted.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-pink-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
