"use client";
import React, { useState, useEffect } from "react";

export const ButtonTop = () => {
  const [visible, setVisible] = useState(false);

  //  button is visible when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 left-6 z-50 p-4 rounded-full bg-black text-white shadow-lg hover:bg-pink-500 transition-all duration-300"
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </>
  );
};
