import React from 'react'
import CardAdmin from '../CardAdmin'
import { redirect, useNavigate } from 'react-router-dom'

export default function CommandeList() {


  //***************navigation */
  const navigate= useNavigate();

//  *********************data card 
 
  const dataFormation=[
    {
      id:2,
      titre:"React",
      nombreCommande:10,
      image: "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:3,
      titre:"Keycloak",
      nombreCommande:7,
      image: "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:2,
      titre:"Wordpress",
      nombreCommande:0,
      image: "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:30,
      titre:"Java ",
      nombreCommande:20,
      image: "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

  ]


  // ******************************
  const handleClickNavigate=(id)=>{
    
    // *****************redirection avec le id vers page OneCommandePage

    navigate(`/admin/commande/${id}`);

  }
  return (
    <div className='flex flex-wrap '>

      {
        dataFormation.map((formation)=>(
          <CardAdmin 
            id={formation.id}
            name={formation.titre}
            nombre={formation.nombreCommande}
            logo={formation.image} 

            handleClickNavigate={handleClickNavigate}
          />
        ))
      }
    </div>
  )
}
