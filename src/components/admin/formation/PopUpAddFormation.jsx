import React, { useState } from "react";

export default function PopUpAddFormation({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    status: "Inactive",
    price: "",
    image: null, // Champ pour l'image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Formulaire soumis avec succès !");
    onClose(); // Ferme le popup après la soumission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-100">
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-2xl relative">
        {/* Bouton pour fermer */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Ajouter une Formation
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Titre */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Titre</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Titre de la formation"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Description de la formation"
            ></textarea>
          </div>

          {/* Auteur */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Auteur</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nom de l'auteur"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Status</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="Published"
                  checked={formData.status === "Published"}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span>Publié</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={formData.status === "Inactive"}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span>Inactif</span>
              </label>
            </div>
          </div>

          {/* Prix */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Prix</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Prix de la formation"
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Importer une image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Bouton Valider */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
