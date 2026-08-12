import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand / About */}
        <div>
          
          
 {/* Logo */}
       <div  className="flex items-center gap-3">
  <img 
    src="/images/enolexSMPLogo1.png" 
    alt="Enolex SMP" 
    className="h-14 mb-5 rounded-sm w-auto object-contain" 
  />
</div>

          <p className="text-lg leading-relaxed">
            Spécialiste en micropigmentation capillaire et distinct soins esthétiques.
            Notre mission est  de vous redonner confiance avec des services de qualité.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-black text-2xl font-semibold mb-6">Suivez-nous</h3>
          <div className="flex space-x-6">
            <Link href="https://facebook.com" target="_blank" className="hover:text-pink-500">
              <FaFacebookF size={32} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
              <FaInstagram size={32} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-pink-500">
              <FaTwitter size={32} />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-pink-500">
              <FaYoutube size={32} />
            </Link>
          </div>
        </div>

        {/* Pricelist Download */}
        <div>
          <h3 className="text-black text-2xl font-semibold mb-6">Nos Tarifs</h3>
          <p className="text-lg mb-4">Téléchargez notre liste de prix.</p>
          <Link
            href="/assets/Price/pricelist.pdf"
            target="_blank"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-lg shadow-md transition"
          >
            Télécharger PDF
          </Link>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-black text-2xl font-semibold mb-6">Abonnez-vous</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Adresse email"
              className="bg-gray-200 px-5 py-3 rounded-lg text-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-lg shadow-md transition"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16">
        <h3 className="text-black text-2xl font-semibold mb-6">Notre Localisation</h3>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.123456789!2d28.047305!3d-26.204103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951123456789%3A0xabcdef123456789!2sSandton%2C%20Johannesburg!5e0!3m2!1sfr!2sza!4v1691234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-gray-300 pt-8 text-center text-lg text-gray-500">
        © {new Date().getFullYear()} Enolex SMP Salon. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
