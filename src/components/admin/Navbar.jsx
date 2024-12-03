import React, { useState } from 'react';

export default function Navbar() {
  // ************ Animation bouton utilisateur
  const [isClickUserMenu, setIsClickUserMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
          TalentUp
        </a>

        {/* Barre de recherche et panier */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Rechercher des produits"
            className="hidden md:block border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Menu utilisateur */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setIsClickUserMenu(!isClickUserMenu)}
            >
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Menu déroulant */}
            {isClickUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Voir profil
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Déconnexion
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="block md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
