import React from 'react'
import CardAdmin from '../../components/admin/CardAdmin'
import ChartFormation from '../../components/admin/chart/ChartFormation'
import ChartBarMembreCommandeFormation from '../../components/admin/chart/ChartBarMembreCommandeFormation'

export default function ChartPage() {


  // **************************fause data pour manipuler les chartJs 
  const dataMembreCommandeFormation=[
    {
      label:"membre",
      value:5
    },
    {
      label:"commande",
      value:2
    },
    {
      label:"formation",
      value:20
    },
  ]

  const dataFormation=[
    {
      name:"ReactJs",
      effectif:15
    },
    {
      name:"WordPress",
      effectif:1
    },
    {
      name:"NodeJs",
      effectif:7
    },
    {
      name:"Keycloak",
      effectif:20
    },
    {
      name:"Linux",
      effectif:0
    },

  ]


  const dataCardMembreFormationCommande=[
    {
        nom:"membre",
        nombre:12,
        image : "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        nom:"commande",
        nombre:12,
        image : "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        nom:"formation",
        nombre:12,
        image : "https://images.pexels.com/photos/671658/pexels-photo-671658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  

// *****************************************************fause 
  return (
    <>
     {/* **************************petite carte ***************************** */}
        <div className='flex flex-wrap '>

            {
                dataCardMembreFormationCommande.map((element,index)=>(
                    <CardAdmin key={index} name={element.nom} nombre={element.nombre} logo={element.image}/>
                ))
            }
           
            
          </div>


          {/* ****************************************CHART *************************** */}
          <div className='w-full z-30  py-4 flex flex-wrap justify-between'>


            {/* *************************chart an formation, membre et commande en meme temps sous forme de barre  */}

            <div className='w-full bg-white p-4 rounded-3xl shadow-2xl'>
              
              <h3 className='text-3xl mt-7 font-bold text-blue-600'>Static des formations </h3>
              <ChartFormation data={dataFormation}/>

            </div>
            {/* **********************************chart formation seule  */}
            <div className='bg-zinc-50 w-[60%] h-[420px]  mt-10 rounded-3xl shadow-2xl p-4'>
           
              <ChartBarMembreCommandeFormation data={dataMembreCommandeFormation}/>
            </div>
            
        </div>
    </>
  )
}
