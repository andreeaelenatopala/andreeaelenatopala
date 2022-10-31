import React from 'react'
import { FaHome, FaInfo } from 'react-icons/fa'

export const NAVBAR_ITEMS = [
  {
    route: '/',
    name: 'Home',
    icon: <FaHome />,
  },
  {
    route: '/dashboard',
    name: 'Dashboard',
    icon: <FaInfo />,
  },
]
