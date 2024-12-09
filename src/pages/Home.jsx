import React from 'react'
import MenuHome from './MenuHome';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
            TalentUp
          </a>
  
          <MenuHome />
  
          {/* Recherche et panier */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search products"
              className="hidden md:block border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <a href="/cart" className="text-gray-600 hover:text-blue-600 relative">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5m-2-5h16M7 13l-1.4 5m-2-5H3m6 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                ></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </a>
            <Link to={import.meta.env.VITE_API_KC_WEB_ORIGIN}>Se connecter</Link>
          </div>
  
          {/* Menu bouton mobile */}
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
