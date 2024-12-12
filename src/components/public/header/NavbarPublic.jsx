
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'

export default function NavbarPublic() {
  const [monPanier, setMonPanier] = useState([
    {id: 1, formation: "Formation 1", prix: 5},
    {id: 2, formation: "Formation 1", prix: 6},
    {id: 3, formation: "Formation 1", prix: 19},
  ]);

  const [voirPanier, setVoirPanier] = useState(false);
  
  const toogleVoirFormation = () => {
    setVoirPanier(!voirPanier);
  }


  const navigate = useNavigate();

  const totalPanier = monPanier.reduce((acc, panier) => acc + panier.prix, 0);



  return (
      <nav className="fixed w-full bg-white shadow-lg z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="text-3xl font-bold text-blue-600">
        TalentUp
      </a>

      {/* Recherche et panier */}
      <div className="flex items-center space-x-6">
        <input
          type="text"
          placeholder="Rechercher une formation"
          className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 relative focus:outline-none">
            <FaShoppingCart size={28} onClick={toogleVoirFormation}/>
            {totalPanier > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {monPanier.length}
              </span>
            )}
          </button>
          {
            voirPanier && (
              <div className="absolute right-0 mt-4 w-64 bg-white shadow-lg rounded-lg py-2 opacity-100 transition-all duration-300 ease-in-out">
            {monPanier.length > 0 ? (
              monPanier.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-2 border-b border-gray-200 hover:bg-gray-50"
                >
                  <div className="text-sm font-semibold text-gray-700">{item.formation}</div>
                  <div className="text-xs text-gray-500">{item.prix} €</div>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 mt-6 text-center text-gray-600">Votre panier est vide</div>
            )}
            <div className="flex px-2 justify-center items-center">
            <span className="text-lg font-semibold text-gray-800">
              Net à payer: {monPanier.reduce((acc, panier) => acc + panier.prix, 0)} €
            </span>
          </div>
            <Link
              to="/cart"
              className="block text-center text-white font-bold bg-blue-400 hover:bg-blue-600 py-2 mt-2 rounded-b-lg transition-all duration-200"
            >
              Procéder au paiement
            </Link>
          </div>
            )
          }
        </div>
      </div>
      {/* <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-md"

        onClick={()=>{navigate('/')}}
      >
        Se connecter
      </button> */}

      <Link to={import.meta.env.VITE_API_KC_WEB_ORIGIN}>Se connecter</Link>

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
  )
  }
