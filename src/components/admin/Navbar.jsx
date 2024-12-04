import React, { useState } from "react";

export default function Navbar() {
  // ************ Animation bouton utilisateur
  const [isClickUserMenu, setIsClickUserMenu] = useState(false);

  return (
    <nav className="relative top-0 left-64 w-[calc(100%-16rem)] z-60 px-2">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Barre de recherche */}
    <div className="flex-grow">
      <input
        type="text"
        placeholder="Rechercher des produits"
        className="hidden md:block w-full max-w-md border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Menu utilisateur */}
    <div className="relative">
      <button
        className="flex items-center  focus:outline-none"
        onClick={() => setIsClickUserMenu(!isClickUserMenu)}
      >
        <img
          src="https://via.placeholder.com/40"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        
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
</nav>

  );
}
