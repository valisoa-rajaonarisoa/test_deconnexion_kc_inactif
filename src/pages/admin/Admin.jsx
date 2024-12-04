import React from 'react'
import Navbar from '../../components/admin/Navbar'

import SideMenu from '../../components/admin/SideMenu'
import { Outlet } from 'react-router-dom'


export default function Admin() {


  // ********************************fause data pour manipuler les chartJs

  return (
    <div>
        <Navbar/>
        <SideMenu/>
        <main className='relative top-0 left-64 w-[calc(100%-16rem)] z-30 px-5 pt-10 pb-4'>
          <Outlet/>
        </main>
    </div>
  )
}
