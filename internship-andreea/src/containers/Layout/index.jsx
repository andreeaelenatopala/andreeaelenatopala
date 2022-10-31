import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'

import * as Styled from './styles'

const Layout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true)

  return (
    <div>
      {isNavbarOpen && (
        <Navbar toggleNavbar={setIsNavbarOpen} isNavbarOpen={isNavbarOpen} />
      )}
      <Styled.MenuButton
        icon={<MdMenu />}
        onClick={() => setIsNavbarOpen(true)}
      />
      <Styled.AppWrapper isNavbarOpen={isNavbarOpen}>
        <Outlet context={[setIsNavbarOpen]} />
      </Styled.AppWrapper>
    </div>
  )
}

export default Layout
