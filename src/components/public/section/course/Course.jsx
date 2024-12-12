import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Course() {
  // States
  const [categories, setCategories] = useState([]);
  const [formations, setFormations] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  

  // **********recuperation de tout les categories
  const getCategorieDataBase = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BK_CATEGORIE}`);
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
      toast.error("Une erreur s'est produite lors de la récupération des catégories.");
    }
  };

  // *************************recuperation des formations selon le id du categorie 
  const handleClickGetFormationDataBaseByCategorieId = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BK_FORMATION}/categories/${id}`);
      setFormations(response.data);
      setActiveCategory(id); // Définir la catégorie active
    } catch (error) {
      console.error("Erreur lors de la récupération des formations :", error);
      toast.error("Une erreur s'est produite lors de la récupération des formations.");
    }
  };

  // Récupération de toutes les formations
  const handleClickGetFormationDataBaseDefault = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BK_FORMATION}`);
      setFormations(response.data);
      setActiveCategory(null); // Réinitialiser la catégorie active
    } catch (error) {
      console.error("Erreur lors de la récupération des formations :", error);
      toast.error("Une erreur s'est produite lors de la récupération des formations.");
    }
  };

  // Charger les catégories et les formations par défaut au chargement
  useEffect(() => {
    getCategorieDataBase();
    handleClickGetFormationDataBaseDefault();
  }, []);




  // Si les catégories sont en cours de chargement
  if (!categories.length) return <div>Chargement des catégories...</div>;

  return (
    <div className="w-full flex flex-col items-center p-8">
      <h2 className="text-3xl text-blue-500 font-black mb-6">Find the Right Online Course for You</h2>

      {/* Boutons des catégories */}
      <div className="flex space-x-4 bg-teal-600 rounded-lg overflow-hidden mb-8">
        <button
          onClick={handleClickGetFormationDataBaseDefault}
          className={`px-8 py-4 text-lg font-medium text-white transition ${
            activeCategory === null ? "bg-teal-800" : "hover:bg-teal-400"
          }`}
        >
          Tout
        </button>
        {categories.map((categorie) => (
          <button
            key={categorie.id}
            onClick={() => handleClickGetFormationDataBaseByCategorieId(categorie.id)}
            className={`px-8 py-4 text-lg font-medium text-white transition ${
              activeCategory === categorie.id ? "bg-teal-800" : "hover:bg-teal-400"
            }`}
          >
            {categorie.nom}
          </button>
        ))}
      </div>

      {/* Affichage des formations */}
      <div className="flex flex-wrap justify-center">

        {formations.length > 0 ? (
          formations.map((formation) => (
            <div key={formation.id} className="card m-4 p-4 border border-gray-200 shadow-lg rounded-md">
              <div className="face front">
                <img src="src/assets/img/back.jpg" alt={formation.nom} className="w-full h-32 object-cover rounded-md" />
                <h3 className="text-md font-extrabold mt-2">{formation.titre}</h3>
              </div>

              <div className="face back mt-4">
                <h3 className="text-lg font-bold">{formation.titre}</h3>
                <p className="text-sm">Auteur : {formation.username}</p>
                <p className="text-sm">Chapitres : {"0"}</p>
                <p className="text-sm">Prix : {formation.prix}€</p>
                <button className="bg-red-500 px-4 py-2 mt-2 text-white rounded-md">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune formation disponible dans cette catégorie.</p>
        )}
      </div>
    </div>
  );
}
