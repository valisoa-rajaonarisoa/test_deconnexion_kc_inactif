import React from 'react'
import { useParams } from 'react-router-dom'
import OneCommandeTable from '../../components/admin/commande/OneCommandeTable';

export default function OneCommandePage() {
 // *********recupration usrl 
  const {id}= useParams();

  return (
    <div>
    
      <h3 className='text-3xl font-bold text-blue-500 mb-5'>Les Acheteurs du formation {"Java"} </h3>

        <OneCommandeTable/>
    </div>
  )
}
