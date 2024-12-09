import React from 'react'
import NavbarMembre from '../components/membre/NavbarMembre';

export default function Membre() {
    
    return (
      <div className="App">
        <NavbarMembre />
        <main className="container mx-auto mt-10">
          <h1 className="text-4xl font-bold text-center">Bienvenue dans membre</h1>
          <p className="text-gray-600 text-center mt-4">
          Découvrez des formations étonnants aux meilleurs prix.
          </p>
        </main>
      </div>
    );
}
