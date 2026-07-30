"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-widest uppercase">
          Enolex SMP
        </div>

        {/* Navigation links */}
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
            <button
              className="text-white text-sm uppercase tracking-widest hover:text-pink-400 transition-colors duration-300"
            >
              Services
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
    href="/Services/lipblush"
    className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
  >
    Lip Blush (Dermopigmentation des lèvres)
  </Link>

  <Link
    href="/Services/lipblush"
    className="block px-4 py-2 text-white text-base hover:bg-pink-600 transition"
  >
  politique de réservation
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
        <div className="block">
          <Link
            href="#Booking"
            className="text-black border border-white px-6 py-2 rounded-full text-sm uppercase tracking-widest bg-white hover:bg-pink-300 hover:text-black transition-all duration-600"
          >
            Réserver
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex justify-center bg-black/80 py-4 space-x-6">
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
          Services
        </Link>
        <Link
          href="#Formation"
          className="text-white text-sm uppercase tracking-widest hover:text-pink-400"
        >
          Formation
        </Link>
        <Link
          href="#Contact"
          className="text-white text-sm uppercase tracking-widest hover:text-pink-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
