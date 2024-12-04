import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuHome() {
  return (
        <div className="hidden md:flex space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-blue-600">
              Nos formations
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
        </div>
  )
}
