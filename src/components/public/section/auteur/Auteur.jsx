import React from 'react'

export default function Auteur() {


 const dataAuteur = [
    {
        id:2,
        nom:"john snow",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius!"
    },
    {
        id:9,
        nom:"aria stark ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius!"
    },

    {
        id:22,
        nom:"magneva ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius!"
    },

    {
        id:12,
        nom:"emoan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius!"
    },

    {
        id:82,
        nom:"arturh ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius!"
    },
    
 ]

 

  return (
    <div>
       <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
            Explore Our Popular Professeur 
      </h2>

        <div className='container-auteur '>

            {
                dataAuteur.map((auteur)=>(

                    <div class="card-auteur shadow-2xl" key={auteur.id}>
                    <div class="img">
                        <img src="https://images.pexels.com/photos/29686629/pexels-photo-29686629/free-photo-of-woman-in-stylish-outfit-standing-among-tall-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
    
                    <div class="content">
                        <h2 className='bg-red-200 px-5 py-4 text-red-600'>{auteur.nom}</h2>
                        <p>{auteur.description}</p>

                    </div>
                </div>
                ))
            }
           

            
        </div>
    </div>
  )
}
