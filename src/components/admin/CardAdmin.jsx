import React, { useState, useEffect } from 'react';

export default function CardAdmin({ name, nombre, logo }) {
  const [currentNumber, setCurrentNumber] = useState(0); 

  useEffect(() => {
    const increment = Math.ceil(nombre / 50); 
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev + increment >= nombre) {
          clearInterval(interval); 
          return nombre;
        }
        return prev + increment; 
      });
    }, 100); 

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, [nombre]);

  return (
    <div className="w-2/5 pl-5 py-5 pr-2 flex rounded-xl shadow-xl bg-white mr-12 mb-10">
      <button>
        <img
          src="https://via.placeholder.com/40"
          alt="User avatar"
          className="w-28 h-28 rounded-full"
        />
      </button>

      <div className="ml-10 flex-col justify-items-start">
        <h3 className="text-2xl font-light text-center text-blue-800">{name}</h3>
        <h3 className="text-5xl mt-7 font-bold text-blue-800">+{currentNumber}</h3>
      </div>
    </div>
  );
}
