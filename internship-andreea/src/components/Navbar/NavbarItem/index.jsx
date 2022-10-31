import React from 'react'
import PropTypes from 'prop-types'
import useMobileResolution from '../../../hooks/isMobileResolution'

import * as Styled from './styles'

const NavbarItem = ({ route, name, icon, active, onClick }) => {
  const isMobile = useMobileResolution()

  return (
    <Styled.ListItem data-testid="navbar-item" isMobile={isMobile}>
      <Styled.NavbarLink
        data-testid="navbar-item-link"
        active={+active}
        to={route}
        onClick={() => onClick(route)}
      >
        <Styled.IconWrapper>{icon}</Styled.IconWrapper>
        {name}
      </Styled.NavbarLink>
    </Styled.ListItem>
  )
}

NavbarItem.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
}

export default NavbarItem
