import { HeaderContainer, HeaderLogo, HeaderInformation } from './styles'
import { IoLocationSharp, IoCartSharp } from 'react-icons/io5'

import LogoHeader from '../../assets/Logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={LogoHeader} alt="" />
      </HeaderLogo>
      <HeaderInformation>
        <span>
          <IoLocationSharp
            style={{
              height: '1.2rem',
              width: '1.2rem',
              marginBottom: '-0.2 rem',
              marginRight: '0.2rem',
              color: '#4B2995',
            }}
          />
          Tobias Barreto, SE{' '}
        </span>

        <a href="#">
          <IoCartSharp
            style={{
              height: '1.4rem',
              width: '1.4rem',
              marginBottom: '-0.2 rem',
              marginRight: '0.2rem',
              color: '#4B2995',
            }}
          />
        </a>
      </HeaderInformation>
    </HeaderContainer>
  )
}
