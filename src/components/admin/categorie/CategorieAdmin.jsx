import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useKeycloak } from '../../../context/KeycloakContext';

export default function CategorieAdmin() {


  const {keycloak : kc} = useKeycloak();

  // *********************1
  const queryClient = useQueryClient();

  // **********************2
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categorie'],
    queryFn: () => axios.get(`${import.meta.env.VITE_API_BK_CATEGORIE}`).then((res) => res.data),
    onError: (error) => console.log(error),
  });






  // ************************supprimer 
  const deleteCategorieMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`${import.meta.env.VITE_API_BK_CATEGORIE}/${id}`,{
      headers:{
        Authorization : `Bearer ${kc.token}`
      }

    }),
    onSuccess: () => {
      
      queryClient.invalidateQueries(['categorie']);

      toast.success("Categorie bien supprimé")
    },
    onError: (error) => {
      console.error('Erreur lors de la suppression:', error.message);
    },
  });



  if (isLoading) return <div className="text-center text-blue-500">Chargement des catégories...</div>;

  if (error) return <div className="text-center text-red-500">Erreur lors de la récupération des données.</div>;

  return (
    <div className="overflow-x-auto rounded-2xl p-4 bg-gray-50">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-3 text-left font-medium">Nom</th>
            <th className="px-6 py-3 text-left font-medium">Description</th>
            <th className="px-6 py-3 text-left font-medium">Auteur</th>
            <th className="px-6 py-3 text-left font-medium">Email</th>
            <th className="px-4 py-3 text-center font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categorie, index) => (
            <tr
              key={categorie.id}
              className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition duration-200`}
            >
              <td className="px-4 py-2 text-gray-700">{categorie.nom}</td>
              <td className="px-6 py-2 text-gray-700">{categorie.description}</td>
              <td className="px-6 py-2 text-gray-700">{categorie.username}</td>
              <td className="px-6 py-2 text-gray-700">{categorie.email}</td>
              <td className="px-4 py-2 text-center">
                
                <button
                  className="ml-2 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-300"


                  // ***************************suppression
                  onClick={()=>{
                    deleteCategorieMutation.mutate(categorie.id);
                  }}
                  
                >
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}