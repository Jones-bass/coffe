import { NavLink } from 'react-router-dom'

import { HeaderContainer, HeaderLogo, HeaderInformation } from './styles'
import { IoLocationSharp, IoCartSharp } from 'react-icons/io5'

import LogoHeader from '../../assets/Logo.png'
import { useContext } from 'react'
import { UseContextCard } from '../../context/useCartContext'

export function Header() {
  const { card } = useContext(UseContextCard)
  const cardLength = card.length

  return (
    <HeaderContainer>
      <HeaderLogo>
        <NavLink to="/" title="inicio">
          <img src={LogoHeader} alt="" />
        </NavLink>
      </HeaderLogo>
      <HeaderInformation>
        <span>
          <IoLocationSharp size={20} color="#4B2995" />
          Tobias Barreto, SE
        </span>

        <nav>
          <NavLink to="/formulario" title="formulario">
            <IoCartSharp size={20} color="#4B2995" />
            {!cardLength ? null : <span>{cardLength}</span>}
          </NavLink>
        </nav>
      </HeaderInformation>
    </HeaderContainer>
  )
}
