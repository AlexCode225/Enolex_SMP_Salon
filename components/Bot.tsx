"use client";
import React, { useEffect, useState } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa'; 

function Bot() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+2250707020334';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/2250707020334';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // Show bot after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 flex flex-col space-y-2 items-end transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${isHovered ? '' : 'animate-vibrate'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white text-black rounded-lg p-2 mb-1 shadow-lg">
        <h1 className="text-sm">Consulter maintenant </h1>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleCall}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-transform duration-200 ease-in-out"
        >
          <FaPhone size={24} />
        </button>
        <button
          onClick={handleWhatsApp}
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-700 transition-transform duration-200 ease-in-out"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>
      <style jsx>{`
        @keyframes vibrate {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(7px);
          }
        }
        .animate-vibrate {
          animation: vibrate 0.5s infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default Bot;
