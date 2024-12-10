import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link} from 'react-router-dom';

export default function SideMenuAuteur() {

    return (
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-700 text-white shadow-lg z-40">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6">TalentUp</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/auteur" className='block py-2 px-4 rounded hover:bg-gray-800 transition duration-200 flex'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
                <span className='ml-2'>Dashbord</span>

              </Link>

            </li>

            <li>
              <Link to="/auteur/formation" className='block py-2 px-4 rounded hover:bg-gray-800 transition duration-200 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>

                <span className='ml-2'>Formation</span>
              </Link>
            </li>

            <li>
              <Link to="/auteur/commande" className='block py-2 px-4 rounded hover:bg-gray-800 transition duration-200 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}       stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>


                <span className='ml-2'>Commande</span>
              </Link>
            </li>

            <li>
              <Link to="/auteur/profile/40" className='block py-2 px-4 rounded hover:bg-gray-800 transition duration-200 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>



                <span className='ml-2'> Profile </span>
              </Link>
            </li>


            <li>

              <button
               
               className='block py-2 px-4 rounded hover:bg-gray-800 transition duration-200 flex'

              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>

                <span className='ml-2'>Deconnexion</span>
              </button>
            
            </li>
          </ul>
        </div>
      </div>
    );
}
  

