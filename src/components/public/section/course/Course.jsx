import React, { useState } from "react";

const tabsData = [
  {
    id: "Tout",
    title: "Tout",
    content: "Affichez tous les cours disponibles",
    image: "images/img1.jpg",
  },
  {
    id: "Developpement",
    title: "Développement",
    content: "Affichez les cours de développement",
    image: "images/img2.jpg",
  },
  {
    id: "Reservation",
    title: "Réservation",
    content: "Affichez les cours de réservation",
    image: "images/img3.jpg",
  },
];

const data = [
  {
    id: 1,
    categorie: "Developpement",
    nombreChapitre: 14,
    titre: "Cours Java",
    prix: 200,
    auteur: "John Snow",
  },
  {
    id: 2,
    categorie: "Developpement",
    nombreChapitre: 10,
    titre: "Cours React.js",
    prix: 150,
    auteur: "Jane Doe",
  },
  {
    id: 3,
    categorie: "Reservation",
    nombreChapitre: 8,
    titre: "Cours de la réservation",
    prix: 100,
    auteur: "Sam Smith",
  },
  {
    id: 4,
    categorie: "Tout",
    nombreChapitre: 20,
    titre: "Cours général",
    prix: 300,
    auteur: "Alice Blue",
  },
];

export default function Course() {
  const [activeTab, setActiveTab] = useState("Tout");

  // Filtrer les cours basés sur la catégorie
  const filteredData =
    activeTab === "Tout"
      ? data // Si "Tout", afficher tous les cours
      : data.filter((course) => course.categorie === activeTab);

  return (
    <div className="w-full flex flex-col items-center p-8">
      <h2 className="text-3xl text-blue-500 font-black mb-6">
        Find the Right Online Course for You
      </h2>

      {/* Onglets */}
      <div className="flex space-x-4 bg-teal-600 rounded-lg overflow-hidden">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-4 text-lg font-medium text-white transition ${
              activeTab === tab.id ? "bg-teal-800" : "hover:bg-teal-400"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Contenu de l'onglet actif */}


      <div className="mt-8 w-full text-red-500 text-center">
        <h3 className="text-4xl font-bold mb-4">
          {tabsData.find((tab) => tab.id === activeTab)?.title}
        </h3>
        <p className="text-lg mb-6">
          {tabsData.find((tab) => tab.id === activeTab)?.content}
        </p>

        {/* Liste des cours filtrés */}
        <div className="flex flex-wrap">
          {filteredData.length > 0 ? (
            filteredData.map((course) => (
              <div
                key={course.id}
                className="card"
              >
                <div className="face front">
                    <img src="src/assets/img/back.jpg" alt=""/>
                    <h3 className="text-md font-extrabold">{course.titre}</h3>
                </div>

                <div className="face back ">
                    <h3>
                        {course.titre}
                    </h3>

                    <p className="text-sm">Auteur : {course.auteur}</p>
                    <p className="text-sm">Chapitres : {course.nombreChapitre}</p>
                    <p className="text-sm">Prix : {course.prix}€</p>


                    <button className="bg-red-500 py-4 text-lg rounded-md">
                        Ajout au panier
                    </button>
                </div>
                
              </div>
            ))
          ) : (
            <p>Aucun cours disponible dans cette catégorie.</p>
          )}
        </div>
      </div>
    </div>
  );
}

