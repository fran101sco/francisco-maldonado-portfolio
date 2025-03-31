import React from 'react'
import Navbar from './navbar/navbar'
import Themes from './themes/themes'
import { Outlet } from 'react-router'
const AppLayout = () => {
  return (
    <>
       <Navbar />
       <Outlet />
       <Themes />
    </>
  )
}

export default AppLayout