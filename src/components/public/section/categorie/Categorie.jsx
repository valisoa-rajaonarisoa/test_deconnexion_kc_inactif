import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Categorie() {

  //state
  const [categorie,setCategorie]=useState(null);



  //comportement
  const getCategorieDataBase= async ()=>{

    try{

      const categories= await axios.get(`${import.meta.env.VITE_API_BK_CATEGORIE}`);

      setCategorie(categories.data);

    }catch(error){
      console.log("une error",error);

      toast.error("une erreur s'est produite lors de la recuperation des categories ")
    }
  }

  

  useEffect(()=>{
    getCategorieDataBase();
  },[])


  if(!categorie) return <iv>********************chargement des categories</iv>

  //affichage
  return (
    <div className="p-8 pb-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Explore Our Popular Courses
      </h2>

      {/*  */}

      <div className="flex flex-wrap">

        {
          categorie.map((element)=>(
            <div class="card-categorie" key={element.id}>
                <div class="img">
                    <img src="src/assets/img/compter.jpg" alt=""/>
                </div>
                <div class="content">
                  <h2 className='text-zinc-100 font-semibold text-2xl mb-8'>{element.nom}</h2>
                  <p className='text-zinc-100 font-normal text-md'>{element.description}</p>
                </div>
            </div>
          ))
        }
        
      </div>
    </div>
  );
}
