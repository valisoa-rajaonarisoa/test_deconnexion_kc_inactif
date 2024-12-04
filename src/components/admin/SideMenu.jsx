import React from 'react';

export default function SideMenu() {
    return (
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-40">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">TalentUp</h1>
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}
  