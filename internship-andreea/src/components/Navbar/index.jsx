import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'universal-cookie'

import NavbarItem from './NavbarItem'
import { MdClose } from 'react-icons/md'
import useMobileResolution from '../../hooks/isMobileResolution'

import { NAVBAR_ITEMS } from '../../constants/navbar-links'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ toggleNavbar }) => {
  const [activeRoute, setActiveRoute] = useState(NAVBAR_ITEMS[0].route)
  const cookies = new Cookies()
  const navigate = useNavigate()

  const isMobile = useMobileResolution()

  const handleClick = (route) => {
    setActiveRoute(route)
    if (isMobile) {
      toggleNavbar(false)
    }
  }

  const handleLogout = () => {
    cookies.remove('isLoggedIn')
    navigate('/login')
  }

  return (
    <Styled.NavbarWrapper isMobile={isMobile}>
      <Styled.CloseButton
        onClick={() => {
          toggleNavbar(false)
        }}
        icon={<MdClose />}
      />

      <Styled.Navbarul>
        {NAVBAR_ITEMS.map((item, index) => (
          <NavbarItem
            key={index}
            icon={item.icon}
            route={item.route}
            name={item.name}
            active={item.route === activeRoute}
            onClick={handleClick}
            data-testid="navbar-item"
          />
        ))}
      </Styled.Navbarul>
      <Styled.ButtonLogOut text="Log out" onClick={handleLogout} />
    </Styled.NavbarWrapper>
  )
}

Navbar.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
}
export default Navbar
