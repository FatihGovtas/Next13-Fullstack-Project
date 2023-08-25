"use client"

import React from 'react'
import Logo from './Logo'
import Categories from './Categories'
import UserMenu from './UserMenu'
import { User } from '@prisma/client'

const Navbar = ({user} : {user: User | any | undefined}) => {
  return (
    <div className='flex items-center justify-between h-16 bg-gray-100 px-7'>
        <Logo/>
        <Categories/>
        <UserMenu user={user}/>
    </div>
  )
}

export default Navbar