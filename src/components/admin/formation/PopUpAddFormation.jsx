import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function PopUpAddFormation({ onClose }) {
 

  // **********************navigation 

  const navigate = useNavigate()

  // *********************initialisation 
  const {handleSubmit,register,watch,formState:{error},reset}= useForm();




  // **************mutation 

  const queryClient= useQueryClient();

  const mutation= useMutation(
    {
      mutationFn:(formation) =>{
        return axios.post(`${import.meta.env.VITE_API_URL_FORMATION}`,formation)
      },

      onError:(error)=>{toast.error("une erreur s'est produite "); console.log(error)},

      onSuccess:()=>{


        queryClient.invalidateQueries("formation")



        toast.success("Formation ajoutéé");
      }
    }
  )




  // *****************fonction onSubmit 
  const onSubmit= async (data)=>{

    // *********************recuperation 

    let status=null;
    if(data.status=="Published"){
      status=true
    }else
    {
      status=false
    }
    
    const formation={
      titre: data.titre,
      description:data.description,
      auteur:data.auteur,
      status:status,
      prix:data.prix,
      image:data.image
    }

    console.log(formation)



    try{

      mutation.mutate(formation);


      reset();


      onClose(); // Ferme le popup après la soumission

    }catch(error)
    {
      console.log(error);

      toast.error("une erreur est survenue ");
    }

  }


   


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


        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Titre */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Titre</label>
            <input
              type="text"
              name="title"
              
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2   focus:ring-blue-400"
                  placeholder="Titre de la formation"


              // ***********************recuperation 

              {...register("titre",
                  {
                    required:"Entrez le titre du formation  ",
                    minLength:{
                    value:3,
                    message:"Entrez aux moins 3 caracteres "
                  }
                }
                )
              }
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
            
             
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Description de la formation"

              // ***********************recuperation 
              {...register("description",
                {
                  required:"Entrez le titre du formation  ",
                  minLength:{
                  value:5,
                  message:"Entrez aux moins 5 caracteres "
                }
              }
              )
            }
            ></textarea>
          </div>

          {/* Auteur */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Auteur</label>
            <input
              type="text"
              name="author"
             
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nom de l'auteur"


              // ***********************recuperation 

              {...register("auteur",
                {
                  required:"Entrez le titre du formation  ",
                  minLength:{
                  value:3,
                  message:"Entrez aux moins 3 caracteres "
                 }
                }
               )
              }
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
                  className="form-radio text-blue-600"


                  // ***********************recuperation 

                  {...register("status")}
                />
                <span>Publié</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                
                  className="form-radio text-blue-600"

                  checked

                  // ******************recupartion
                  {...register("status")}

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
            
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Prix de la formation"


             // ***********************recuperation 

             {...register("prix",
              {
                required:"Entrez le prix  ",
              }
              )
             }

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
             
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"


              {...register("image",
                {
                  required:"Entrez l' iamge du formation  ",
                  
                }
               )
              }
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
