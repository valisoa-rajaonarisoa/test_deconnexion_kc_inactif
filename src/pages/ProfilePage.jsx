import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderProfile from '../components/profile/HeaderProfile';

export default function ProfilePage() {

  const {id}= useParams();
  return (
    <div>

      <HeaderProfile/>

  
    </div>
  )
}
