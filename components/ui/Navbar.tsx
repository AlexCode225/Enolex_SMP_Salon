"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-widest uppercase">
          Enolex SMP
        </div>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex space-x-12 items-center">
          <Link
            href="#About"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400 transition-colors duration-300"
          >
            À propos
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-white text-sm uppercase tracking-widest hover:text-pink-400 transition-colors duration-300">
              Nos Services
            </button>
            {servicesOpen && (
              <div className="absolute mt-2 bg-black/80 rounded-md shadow-lg py-2 w-56 font-plusjakarta">
                <Link
                  href="/Services/smp"
                  className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
                >
                  MPC-Micropigmentation Capillaire
                </Link>
                <Link
                  href="/Services/soins"
                  className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
                >
                  Camouflage Cellulite & Cicatrices
                </Link>
                  <Link
                  href="/Services/soins"
                  className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
                >
                  le microblading 
                </Link>
               
                <Link
                  href="/Services/lipblush"
                  className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
                >
                  Lip Blush (Dermopigmentation des lèvres)
                </Link>
                <Link
                  href="/Services/lipblush"
                  className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
                >
                  Politique de réservation
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#Formation"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400 transition-colors duration-300"
          >
            Formation
          </Link>

          <Link
            href="#Contact"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center space-x-4">
          <Link
            href=" #Booking"
        className="ml-2 mr-2 text-white border border-pink-50 px-6 py-2 rounded-full text-sm uppercase tracking-widest bg-gradient-to-l from-black via-gray-800 to-gray-950 hover:from-gray-800 hover:to-gray-950 transition-all duration-500"

          >
            Réserver
          </Link>

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileOpen ? (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/65 py-4 space-y-4">
          <Link
            href="#About"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400"
          >
            À propos
          </Link>
          <Link
            href="#Services"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400"
          >
            Nos Services
          </Link>
          <Link
            href="#Formation"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400"
          >
            Nos Formations
          </Link>
          <Link
            href="#Contact"
            className="text-white text-sm uppercase tracking-widest hover:text-pink-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
